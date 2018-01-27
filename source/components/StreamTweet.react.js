var React = require('react'),
    ReactDOM = require('react-dom'),
    Header = require('./Header.react'),
    Tweet = require('./Tweet.react'),
    CollectionActionCreators = require('../actions/CollectionActionCreators');

var StreamTweet = React.createClass({
        getInitialState: function () {
            // console.log('[Snapterest] StreamTweet: 1. Running getInitialState()');

            return {
                numberOfCharactersIsIncreasing: null,
                headerText: null
            };
        },

        componentWillMount: function () {
            // console.log('[Snapterest] StreamTweet: 2. Running componentWillMount()');

            this.setState({
                numberOfCharactersIsIncreasing: true,
                headerText: 'Latest public photo from Twitter'
            });

            window.snapterest = {
                numberOfReceivedTweets: 1,
                numberOfDisplayedTweets: 1
            };
        },

        componentDidMount: function () {
            // console.log('[Snapterest] StreamTweet: 3. Running componentDidMount()');

            var componentDOMRepresentation = ReactDOM.findDOMNode(this);

            window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
            window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
        },

        componentWillReceiveProps: function (nextProps) {
            // console.log('[Snapterest] StreamTweet: 4. Running componentWillReceiveProps()');

            var currentTweetLength = this.props.tweet.text.length,
                nextTweetLength = nextProps.tweet.text.length,
                isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);

            this.setState({
                numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing,
                headerText: isNumberOfCharactersIncreasing ? 'Number of characters is increasing' : 'Latest public photo from Twitter'
            });

            window.snapterest.numberOfReceivedTweets++;
        },

        shouldComponentUpdate: function (nextProps, nextState) {
            // console.log('[Snapterest] StremTweet: 5. Running shouldComponentUpdate()');
            return (nextProps.tweet.text.length > 1);
        },

        componentWillUpdate: function (nextProps, nextState) {
            // console.log('[Snapterest] StreamTweet: 6. Running componentWillUpdate()');
        },

        componentDidUpdate: function (prevProps, prevState) {
            // console.log('[Snapterest] StreamTweet: 7. Running componentDidUpdate()');
            window.snapterest.numberOfDisplayedTweets++;
        },

        componentWillUnmount: function () {
            // console.log('[Snapterest] StreamTweet: 8, Running componentWillUnmount()');
            delete window.snapterest;
        },

        addTweetToCollection: function (tweet) {
            CollectionActionCreators.addTweetToCollection(tweet);
        },

        render: function () {
            // console.log('[Snapterest] StreamTweet: Running render()');

            return (
                <section>
                    <Header text={this.state.headerText} />
                    <Tweet
                        tweet={this.props.tweet}
                        onImageClick={this.addTweetToCollection}
                    />
                </section>
            );
        }
    });

module.exports = StreamTweet;
