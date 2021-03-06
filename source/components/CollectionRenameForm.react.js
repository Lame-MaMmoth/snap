var React = require('react'),
    ReactDOM = require('react-dom'),
    Header = require('./Header.react'),
    Button = require('./Button.react'),
    CollectionActionCreators = require('../actions/CollectionActionCreators'),
    CollectionStore = require('../stores/CollectionStore'),
    inputStyle = {
        marginRight: '5px'
    };

var CollectionRenameForm = React.createClass({
        getInitialState: function () {
            return {
                inputValue: CollectionStore.getCollectionName()
            };
        },

        setInputValue: function (inputValue) {
            this.setState({
                inputValue: inputValue
            });
        },

        handleInputValueChange: function (event) {
            this.setInputValue(event.target.value);
        },

        handleFormSubmit: function (event) {
            event.preventDefault();

            var collectionName = this.state.inputValue;

            CollectionActionCreators.setCollectionName(collectionName)

            this.props.onCancelCollectionNameChange(collectionName);
        },

        handleFormCancel: function (event) {
            event.preventDefault();

            var collectionName = CollectionStore.getCollectionName();

            this.setInputValue(collectionName);
            this.props.onCancelCollectionNameChange();
        },

        componentDidMount: function () {
            this.refs.collectionName.focus();
        },

        render: function () {
            return (
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <Header text="Collection name:" />
                    <div className="form-group">
                        <input
                            className="form-control"
                            style={inputStyle}
                            onChange={this.handleInputValueChange}
                            value={this.state.inputValue}
                            ref="collectionName"
                        />
                    </div>

                    <Button label="Change" handleClick={this.handleFormSubmit} />
                    <Button label="Cancel" handleClick={this.handleFormCancel} />
                </form>
            );
        }
    });

module.exports = CollectionRenameForm;
