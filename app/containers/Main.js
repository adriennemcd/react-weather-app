var React = require('react');
var PromptContainer = require('./PromptContainer');

var styles = {
  container: {
    width: '100%',
    height: '92%'
  },
  header :{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    color: '#fff',
    padding: 5,
  }
}

var Main = React.createClass({
  render: function () {
    return (
		<div className='main-container' style={styles.container}>
			<header style={styles.header}>
        <h2>This is the header</h2>
				<PromptContainer direction='row' />
			</header>
			{this.props.children}
		</div>
    )
  }
});

module.exports = Main;