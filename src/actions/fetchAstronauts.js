export default function fetchAstronauts() {
    return (dispatch) => {
        const url = 'http://api.open-notify.org/astros.json'

        dispatch({ type: 'START_ADDING_ASTRONAUTS_REQUEST'})
        
        fetch(url).then(r => r.json()).then(astronauts => {
            dispatch({type: 'ADD_ASTRONAUTS', astronauts})
        })
    }
}