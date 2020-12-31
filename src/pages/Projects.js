import React from 'react';
import '../App.css';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    return (
        <div className='cards'>
            <h1>work.</h1>
            <p> see my<mark> <a href="https://drive.google.com/file/d/1dP3CEAK8R2W5nFuaMwsrng9yqu4Z97P9/view?usp=sharing">resume </a> </mark> .</p>
            <ProjectCard 
                title='We Care Solar'
                subhead='technical'
                description='Built a low bandwidth offline accessible mobile application to aid midwives in rural areas accross 20+ countries for safe childbirth. 
                Developed with Typescript and Redux, deployed with Firebase. 
                I worked on an interactive map feature of the solar suitcase with zoom capability, with topic views of We Care Solar’s suitcase equiptment. '/>
            <ProjectCard 
                title='Activating Your Allyship Journey' 
                subhead='product'
                description='MINWO is a high growth software consulting startup connecting black minority business owners with entrepreneurial opportunities. 
                I designed and created an allyship resource from idea creation, prototyping, to initial user testing stage for 
                monthly diversity accountability workshops with 50+ members.  '
                />
            <ProjectCard 
                title="we're not really strangers"
                subhead='technical'
                description="We're Not Really Strangers is a card game that aims to create meaningful connections between players. My friends and I frequently played 
                over video during quarantine to stay in touch, so we decided to create an online version. Built with React & Airtable."
                />
        </div>
    )
}

export default Projects;