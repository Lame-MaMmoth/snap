jest.dontMock('../Header.react');

describe('Header component', function () {
    it('renders provided header text', function () {
        var React = require('react'),
            ReactDOM = require('react-dom'),
            TestUtils = require('react-addons-test-utils'),
            Header = require('../Header.react');
            

        var header = TestUtils.renderIntoDocument(
                <Header text="Testing..." />
            ),
            actualHeaderText = ReactDOM.findDOMNode(header).textContent;

        expect(actualHeaderText).toBe('Testing...');


        var defaultHeader = TestUtils.renderIntoDocument(
                <Header />
            ),
            actualDefaultHeaderText = ReactDOM.findDOMNode(defaultHeader).textContent;
        
        expect(actualDefaultHeaderText).toBe('Default header');
    });
});
