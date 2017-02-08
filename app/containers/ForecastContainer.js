var React = require('react');
var Forecast = require('../components/Forecast');
var api = require('../helpers/api');

var ForecastContainer = React.createClass({
	getInitialState: function() {
		return {
			isLoading: true,
			forecast: {}
		}
	},

	componentDidMount: function() {
		api.getForecast(this.props.routeParams.city)
			.then(function(data) {
				this.setState({
					isLoading: false,
					forecast: data
				})
			}.bind(this))
	},

	render: function() {
		return (
			<Forecast 
				location={this.props.routeParams.city}
				isLoading={this.state.isLoading} 
				forecast={this.state.forecast} />
		);
	}
});

module.exports = ForecastContainer;