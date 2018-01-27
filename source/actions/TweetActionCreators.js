var AppDispatcher = require('../dispatcher/AppDispatcher');

function receiveTweet(tweet) {
    var action = {
        type: 'receive_tweet',
        tweet: tweet
    };

    console.log("I've received a new tweet and now will dispatch it together with a new action");

    AppDispatcher.dispatch(action);
}

module.exports = {
    receiveTweet: receiveTweet
};
