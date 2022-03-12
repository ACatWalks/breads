const React = require('react');
const Default = require('./layouts/Default');

function Show({bread, index}) {
    return (
        <Default>
            <h3>{bread.name}</h3>
            <form action={`/breads/${index}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>
            </form>
            <p>
                and it

                {
                    bread.hasGluten 
                    ? <span> does </span>
                    : <span> does NOT </span>
                }

                have gluten. 
            </p>
            <img src={bread.image} alt={bread.name}></img>
            <li><a href="/breads">Go home</a></li>
        </Default>
    )
}

module.exports = Show