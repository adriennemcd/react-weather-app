var React = require('react');
var PromptContainer = require('../containers/PromptContainer');

var Home = React.createClass({
  render: function () {
    return (
      <div>
      	<h1>Enter a City and State</h1>
      	<PromptContainer />
      </div>
    )
  }
});

module.exports = Home;