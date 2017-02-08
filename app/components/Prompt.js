var React = require('react');
var PropTypes = React.PropTypes;

function Input(props) {
	return (
		<input
			className="form-control"
			placeholder="Philadelphia, PA" 
			onChange={props.onUpdateLocation}
			value={props.location}
			type="text" />
	)
}

function Button(props) {
	return (
		<button 
			className="btn btn-success" 
			style={{margin: 10}}
			onClick={props.onSubmitLocation}>
			{props.children}
		</button>
	)
}

function getStyles (props) {
	return {
		display: 'flex',
		flexDirection: props.direction || 'column',
		justifyContent: 'center',
		alignItems: 'center',
		maxWidth: 300,
		alignSelf: 'right'
	}
}

function Prompt(props) {
	return (
		<div style={getStyles(props)}>
			<Input 
				onUpdateLocation={props.onUpdateLocation}
        		location={props.location}/>
			<Button onSubmitLocation={props.onSubmitLocation}> Get Weather </Button>
		</div>
	)
}

Prompt.propTypes = {
	direction: PropTypes.string,
	onUpdateLocation: PropTypes.func.isRequired,
	onSubmitLocation: PropTypes.func.isRequired,
	location: PropTypes.string.isRequired
}

module.exports = Prompt;