import React from 'react';
import '../App.css';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    return (
        <div className='cards'>
            <h1>work.</h1>
            <ProjectCard title='We Care Solar'/>
            <ProjectCard title='Activating Your Allyship Journey' />
            <ProjectCard title="we're not really strangers"/>
        </div>
    )
}

export default Projects;