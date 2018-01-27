var React = require('react'),
    StreamTweet = require('./StreamTweet.react'),
    Header = require('./Header.react'),
    TweetStore = require('../stores/TweetStore');

var Stream = React.createClass({
        getInitialState: function () {
            return {
                tweet: TweetStore.getTweet()
            };
        },

        componentDidMount: function () {
            TweetStore.addChangeListener(this.onTweetChange);
        },

        componentWillUnmount: function () {
            TweetStore.removeChangeListener(this.onTweetChange);
        },

        onTweetChange: function () {
            this.setState({
                tweet: TweetStore.getTweet()
            });
        },

        render: function () {
            var tweet = this.state.tweet;

            if (tweet) {
                return (
                    <StreamTweet tweet={tweet} />
                );
            }

            return (<Header text="Waiting for public photos from Twitter..."/>);
        }
    });

module.exports = Stream;
