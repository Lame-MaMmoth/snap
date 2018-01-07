var React = require('react'),
    ReactDomServer = require('react-dom/server'),
    CollectionControls = require('./CollectionControls.react'),
    TweetList = require('./TweetList.react'),
    Header = require('./Header.react'),

    Collection = React.createClass({
        createHtmlMarkupStringTweetList: function () {
            var htmlString = ReactDomServer.renderToStaticMarkup(
                    <TweetList tweets={this.props.tweets} />
                ),

                htmlMarkup = {
                    html: htmlString
                };

            return JSON.stringify(htmlMarkup);
        },

        getListOfTweetIds: function () {
            return Object.keys(this.props.tweets);
        },

        getNumberOfTweetsInCollection: function () {
            return this.getListOfTweetIds().length;
        },

        render: function () {
            var numberOfTweetsInCollection = this.getNumberOfTweetsInCollection(),
                tweets, htmlMarkup,
                removeAllTweetsFromCollection, handleRemoveTweetFromCollection;

            if (numberOfTweetsInCollection > 0) {
                tweets = this.props.tweets;
                htmlMarkup = this.createHtmlMarkupStringTweetList();
                removeAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection;
                handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;

                return (
                    <div>
                        <CollectionControls
                            numberOfTweetsInCollection={numberOfTweetsInCollection}
                            htmlMarkup={htmlMarkup}
                            onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection}
                        />
                        <TweetList
                            tweets={tweets}
                            onRemoveTweetFromCollection={handleRemoveTweetFromCollection}
                        />
                    </div>
                );
            }

            return <Header text="Your collection is empty"/>
        }
    });

module.exports = Collection;
