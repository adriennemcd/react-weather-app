var React = require('react');
var PromptContainer = require('../containers/PromptContainer');

var Main = React.createClass({
  render: function () {
    return (
		<div className='main-container'>
			<header>This is the header
				<PromptContainer />
			</header>
			{this.props.children}
		</div>
    )
  }
});

module.exports = Main;