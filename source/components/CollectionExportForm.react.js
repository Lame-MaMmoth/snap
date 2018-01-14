var React = require('react'),
    formStyle = {
        display: 'inline-block'
    },

    CollectionExportForm = React.createClass({
        render: function () {
            return (
                <form action="http://codepen.io/pen/define" method="POST" target="_blank" style={formStyle}>
                    <input type="hidden" name="data" value={this.props.htmlMarkup}/>
                    <button type="submit" className="btn btn-dedault">Export as HTML</button>
                </form>
            );
        }
    });

module.exports = CollectionExportForm;
