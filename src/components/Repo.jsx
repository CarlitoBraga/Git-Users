import React from 'react';

const REPO = (props) => {
    const repo = props.repo
    return(
        
        <section className="repos">
        <h2>Repositories</h2>
        <ul className="table">
             {
                 repo.map(rep => (
                 <li><a href={rep.html_url} target="_blank">{rep.name}</a></li>
 
                 ))
             }
        </ul>
     </section>
    );
}

export default REPO;