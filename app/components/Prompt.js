var React = require('react');
var PropTypes = React.PropTypes;

function Prompt(props) {
	return (
		<div>
			<form onSubmit={props.onSubmitLocation}>
				<div className="form-group">
					<input
					placeholder="Philadelphia, PA" 
					onChange={props.onUpdateLocation}
					value={props.location}
					type="text" />
				</div>
				<div>
					<button type="submit">Get Weather</button>
				</div>
			</form>
		</div>
	)
}

Prompt.propTypes = {
	onUpdateLocation: PropTypes.func.isRequired,
	onSubmitLocation: PropTypes.func.isRequired,
	location: PropTypes.string.isRequired
}

module.exports = Prompt;