var React = require('react');
var PropTypes = React.PropTypes;
var utils = require('../helpers/utils');
var getDate = utils.getDate;
var Loading = require('./Loading');

function Detail(props) {
	return props.isLoading === true
	? <Loading />
	: <div>detail!</div>
}

Detail.propTypes = {
	location: PropTypes.string.isRequired,
	isLoading: PropTypes.bool.isRequired,
	forecast: PropTypes.object.isRequired
}

module.exports = Detail;