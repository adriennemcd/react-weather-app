var React = require('react');
var Prompt = require('../components/Prompt');

var ForecastContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	
	getInitialState: function() {
		return {
			location: ''
		}
	},

	handleUpdateLocation: function(e) {
		this.setState({
			location: e.target.value
		})
	},

	handleSubmitLocation: function(e) {
		e.preventDefault();
		var location = this.state.location;
		this.setState({
			location: ''
		});

		this.context.router.push('/forecast/' + this.state.location)
	},

	render: function() {
		return (
			//<Prompt 
				//onSubmitLocation={this.handleSubmitLocation}
				//onUpdateLocation={this.handleUpdateLocation} 
				//location={this.state.location} />
			<div>Forecast!</div>
		)
	}
});

module.exports = ForecastContainer;