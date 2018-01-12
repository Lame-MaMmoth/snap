var React = require('react'),
    ReactDOM = require('react-dom'),
    Header = require('./Header.react'),
    Button = require('./Button.react'),
    inputStyle = {
        marginRight: '5px'
    },

    CollectionRenameForm = React.createClass({
        getInitialState: function () {
            return {
                inputValue: this.props.name
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
            this.props.onChangeCollectionName(collectionName);
        },

        handleFormCancel: function (event) {
            event.preventDefault();

            var collectionName = this.props.name;
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
