var React = require('react');
var PropTypes = React.PropTypes;
var utils = require('../helpers/utils');
var getDate = utils.getDate;
var Loading = require('./Loading');

function DayItem (props) {
  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  return (
    <div>
      <img src={'./app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
      <h2>{date}</h2>
    </div>
  )
}

function ForecastUI(props) {
	return (
		<div>
			<h1>{props.location}</h1>
			<div>
				{props.forecast.data.List.map(function (listItem) {
		          return <DayItem key={listItem.dt} day={listItem} />
		        })}
			</div>
		</div>
	)
}

function Forecast(props) {
	return props.isLoading === true
	? <Loading />
	: <ForecastUI location={props.location} forecast={props.forecast} />
}

Forecast.propTypes = {
	location: PropTypes.string.isRequired,
	isLoading: PropTypes.bool.isRequired,
	forecast: PropTypes.object.isRequired
}

module.exports = Forecast;