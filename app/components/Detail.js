var React = require('react');
var PropTypes = React.PropTypes;
var utils = require('../helpers/utils');
var getDate = utils.getDate;

var styles = {
	container: {
		textAlign: 'center',
		marginTop: '50px'
	},

	image: {
		height: '150px',
	},

	content: {
		fontSize: '22px'
	}
}

function Detail(props) {
	var date = getDate(props.details.dt);
	var icon = props.details.weather[0].icon;
	var description = props.details.weather[0].description;
	var minTemp = utils.convertTemp(props.details.temp.min);
	var maxTemp = utils.convertTemp(props.details.temp.max);
	var humidity = props.details.humidity;

	return (
		<div style={styles.container}>
			<img src={'./app/images/weather-icons/' + icon + '.svg'} alt='Weather' style={styles.image}/>
	      	<h2>{date}</h2>
	      	<div style={styles.content}>
		      	<p>{description}</p>
		      	<p>{'min temp: ' + minTemp + ' degrees'}</p>
		      	<p>{'max temp: ' + maxTemp + ' degrees'}</p>
		      	<p>{'humidity: ' + humidity}</p>
	      	</div>
		</div>
	)
}

Detail.propTypes = {
	details: PropTypes.object.isRequired
}

module.exports = Detail;