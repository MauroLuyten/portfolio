import React, {Component} from 'react';

class Projects extends Component{
    constructor(props) {
        super(props)
        this.state = {
            projects: [
                {
                    title: 'Maintenance Logger',
                    description: 
                    "During the summer of 2017 I started working on a Progressive WebApp with VueJS, Vuetify and Firebase.\
                     Here users can add their vehicle(s) and keep track of their maintenances.\
                     Images are fetched via the Google Search API and it uses Firebase for Authentication, Json storage and Hosting.",
                    imgpath: 'maintenancelogger-wide-small.jpg',
                    link: 'https://maintenancelogger.firebaseapp.com',
                    github: 'https://github.com/MauroLuyten/maintenancelogger'
                },
                {
                    title: 'Purchase Keeper',
                    description: 
                    "During the last year of my Bachelors we were tasked to build a full-sized WebApp with Spring.\
                    Features include Authentication with Spring Security, I18n and an ORM database with JPA.\
                    For this project we also set up our own server including Jenkins for automated Deployment.\
                    Sadly this server is no longer available.",
                    link: null,
                    imgpath: 'springweb-small.jpg',
                    github: 'https://github.com/MauroLuyten/Spring-WebApp-Purchases'
                },
                {
                    title: 'This Portfolio',
                    description: 
                    `I decided to build my portfolio in React.
                    I already have experience with VueJs and I thought it'd be a good idea to get familiar with the most popular front-end framework.`,
                    link: null,
                    imgpath: 'logo.svg',
                    github: 'https://github.com/MauroLuyten/portfolio'
                },
                /*{
                    title: 'More to come!',
                    description: 
                    "More worthy projects will be coming soon!\
                    This semester will bring a React-Native App and probably a .Net project.",
                    link: null,
                    imgpath: 'logo.svg',
                    github: null
                },*/
            ]
        }
    }
    render(){
        return (
            <section className="projects-container">
                { this.state.projects.map((project, index) => {
                    return (
                    <div className="card" key={index}>
                        <img className="card-media" src={require(`../src/assets/${project.imgpath}`)}></img>
                        <p className="card-title">{project.title}</p>
                        <p className="card-text">{project.description}</p>
                        <section className="card-actions">
                            {project.github && <a href={project.github}>GitHub</a>}
                            {project.link && <a href={project.link}>Visit</a>}
                        </section>
                    </div>
                    )
                }) }
            </section>
        );
    }
}
export default Projects;