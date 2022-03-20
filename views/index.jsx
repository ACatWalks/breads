const React = require('react');
const Default = require('./layouts/Default');

function Index (props) {
    const breads = props.breads;
    return (
        <Default title ={props.title}>
            <h2>Index Page</h2>
            <ul>
                {
                    breads.map((bread) => {
                        return (
                        <ul>
                        <li key={bread.id}><a href={`/breads/${bread.id}`}>{bread.name}</a></li>
                        <li>{bread.getBakedBy()}</li>
                        </ul>
                        )
                    })
                }
            </ul>
            <div className='newButton'>
                <a href="/breads/new"><button>Add a new bread</button></a>
            </div>
        </Default>
    )
}
module.exports = Index;