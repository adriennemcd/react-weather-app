var React = require('react');
var PropTypes = React.PropTypes;
var utils = require('../helpers/utils');
var getDate = utils.getDate;
var Loading = require('./Loading');

var styles = {
	container: {
		textAlign: 'center',
		marginTop: '50px'
	},

	days: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		flexWrap: 'wrap'
	},

	dayItem: {
		flexBasis: '25%',
		padding: '20px'
	},

	image: {
		height: '100px',
		maxWidth: '120px'
	},

	title: {
		fontSize: '22px'
	}
}

function DayItem (props) {
  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  return (
    <a style={styles.dayItem} href="/">
      <img src={'./app/images/weather-icons/' + icon + '.svg'} alt='Weather' style={styles.image}/>
      <h2 style={styles.title}>{date}</h2>
    </a>
  )
}

function ForecastUI(props) {
	// the API returns 'list' with either an uppercase or lowercase 'l'
	var data = {}
	props.forecast.data.list === undefined
	? data = props.forecast.data.List
	: data = props.forecast.data.list

	return (
		<div style={styles.container}>
			<h1>{props.location}</h1>
			<div style={styles.days}>
				{data.map(function (listItem) {
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