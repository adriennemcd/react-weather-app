var React = require('react');
var PromptContainer = require('../containers/PromptContainer');

var styles = {
	container: {
		backgroundSize: 'cover',
		backgroundImage: 'url("app/images/pattern.svg")',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		width: '100%'
	},
	title: {
		color: '#fff',
		fontSize: '45px',
		fontWeight: '100'
	}
}

function Home(props) {
	return (
		<div style={styles.container}>
			<h1 style={styles.title}>Enter a City and State</h1>
			<PromptContainer />
		</div>
	)
}

module.exports = Home;