import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { useEffect } from 'react'
import fetchAstronauts from './actions/fetchAstronauts'

function App({ astronauts, getSpacePeople }) {
	useEffect(() => getSpacePeople(), [getSpacePeople])
	const a = Object.keys(astronauts)
	return (
		<div className="App cool">
			{a.length > 0 && astronauts.people.map(astronaut => {
				return (
					<div key={Math.floor(Math.random() * 1000000)}>
						{astronaut.name}
					</div>
				)
			})}
			<img src={logo} className="App-logo" alt="logo" />
		</div>
	);
}

const mapStateToProps = state => {
	return {
		astronauts: state.astronauts
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getSpacePeople: () => dispatch(fetchAstronauts())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
