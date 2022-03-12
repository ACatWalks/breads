const React = require('react');
const Default = require('/default');

function Error(props) {
    return (
        <Default>
            <div>
            <p>You reached the wrong page!</p>
            <a href="/breads">Home Page</a>
        </div>
        </Default>
    )
}

module.exports = Error