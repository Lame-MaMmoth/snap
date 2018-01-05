var React = requre('react'),
    ReactDOM = require('react-dom'),
    Header = require('./Header.react'),
    Tweet = require('./Tweet.react'),

    StreamTweet = React.createClass({
        getInitialState: function () {
            console.log('[Snapterest] StreamTweet: 1. Running getInitialState()');

            return {
                numberOfCharactersIsIncreasing: null,
                headerText: null
            };
        },

        componentWillMount: function () {
            console.log('[Snapterest] StreamTweet: 2. Running componentWillMount()');

            this.setStatus({
                numberOfCharactersIsIncreasing: true,
                headerText: 'Latest public photo from Twitter'
            });

            window.snapterest = {
                numberOfReceivedTweets: 1,
                numberOfDisplayedTweets: 1
            };
        },

        componentDidMount: function () {
            console.log('[Snapterest] StreamTweet: 3. Running componentDidMount()');

            var componentDOMRepresentation = ReactDOM.findDOMNode(this);

            window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
            window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
        },

        componentWillReceiveProps: function (nextProps) {
            console.log('[Snapterest] StreamTweet: 4. Running componentWillReceiveProps()');

            var currentTweetLength = this.props.tweet.text.length,
                nextTweetLength = nextProps.tweet.text.length,
                isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength),
                headerText;

            this.setState({
                numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
            });

            if (isNumberOfCharactersIncreasing) {
                headerText = 'Number of characters is increasing';
            } else {
                headerText = 'Latest public photo from Twitter';
            }

            this.setState({
                headerText: headerText
            });

            window.snapterest.numberOfReceivedTweets++;
        },

        componentWillUnmount: function () {
            console.log('[Snapterest] StreamTweet: 8, Running componentWillUnmount()');

            delete window.snapterest;
        },

        render: function () {
            console.log('[Snapterest] StreamTweet: Running render()');

            return (
                <section>
                    <Header text={this.state.headerText} />
                    <Tweet
                        tweet={this.props.tweet}
                        onImageClick={this.props.onAddTweetToCollection}
                    />
                </section>
            );
        }
    });
