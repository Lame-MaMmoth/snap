jest.autoMockOff();

describe('Tweet utilities module', function () {
    it('returns an array of tweet ids', function () {
        var TweetUtils = require('../TweetUtils'),
            tweetsMock = {
                tweet1: {},
                tweet2: {},
                tweet3: {}
            },
            expectedListOfTweetIds = [ 'tweet1', 'tweet2', 'tweet3' ],
            actualListOfTweetIds = TweetUtils.getListOfTweetIds(tweetsMock);

        expect(actualListOfTweetIds).toEqual(expectedListOfTweetIds);
    });
});
