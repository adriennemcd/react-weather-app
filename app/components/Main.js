var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
		<div className='main-container'>
			<header>This is the header</header>
			{this.props.children}
		</div>
    )
  }
});

module.exports = Main;