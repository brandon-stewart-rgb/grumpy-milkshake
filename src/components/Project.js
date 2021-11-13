import React from 'react';
import { projects } from '../data'

export default function Project() {

return(

    <>
        {projects.map((project, i) => (
        <div className="column is-4">

            <div className="acontent">
                <div className="acontent-overlay"></div>
                    <img className="acontent-image is-rounded" key={i} alt={project.title} src={project.image}/>
                        <div className="acontent-details fadeIn-bottom ">
                    <h3>{project.title}</h3>
                        <a className='project-link' target='_blank' rel="noreferrer"  href={project.github}>View Project</a> <br />
                        <a className='project-link' target='_blank'  rel="noreferrer"  href={project.demo}>View Demo</a>
                </div>
            </div>

        </div>

        ))}

    </>

)

}