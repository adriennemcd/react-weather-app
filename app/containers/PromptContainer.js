var React = require('react');
var PropTypes = React.PropTypes;
var Prompt = require('../components/Prompt');
var api = require('../helpers/api');

var PromptContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getDefaultProps: function () {
		return {
			direction: 'column'
		}
	},

	propTypes: {
		direction: PropTypes.string
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

		// var weather = api.getCurrentWeather(location);
		// console.log(weather);
		this.context.router.push('/forecast/' + this.state.location)
	},

	render: function() {
		return (
			<Prompt 
				direction={this.props.direction}
				onSubmitLocation={this.handleSubmitLocation}
				onUpdateLocation={this.handleUpdateLocation} 
				location={this.state.location} />
		)
	}
});

module.exports = PromptContainer;