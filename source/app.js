var React = require('react'),
    ReactDOM = require('react-dom'),
    Application = require('./components/Application.react'),
    WebAPIUtils = require('./utils/WebAPIUtils');

WebAPIUtils.initializeStreamOfTweets()

ReactDOM.render(<Application/>, document.getElementById('react-application'));
