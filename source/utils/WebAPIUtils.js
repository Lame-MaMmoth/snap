var SnapkiteStreamClient = require('snapkite-stream-client'),
 // SnapkiteStreamClient = require('./mockTweets'),
    TweetActionCreators = require('../actions/TweetActionCreators');

function initializeStreamOfTweets() {
    SnapkiteStreamClient.initializeStream(TweetActionCreators.receiveTweet);
}

module.exports = {
    initializeStreamOfTweets: initializeStreamOfTweets
};
