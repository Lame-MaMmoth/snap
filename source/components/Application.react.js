var React = require('react'),
    Stream = require('./Stream.react'),
    Collection = require('./Collection.react'),

    Application = React.createClass({
        render: function () {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <Stream />
                        </div>
                        <div className="col-md-8">
                            <Collection />
                        </div>
                    </div>
                </div>
            );
        }
    });

module.exports = Application;
