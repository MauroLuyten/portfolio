import React, {Component} from 'react';
import avatar from './avatar3.jpg';
import github from './github.svg'
import linkedin from './linkedin.svg'
import twitter from './twitter.svg'
import gmail from './gmail.svg'
import Projects from './Projects.js'
import Footer from './Footer.js'
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={avatar} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Mauro Luyten</h1>
                    <h3 className="App-subtitle">Computer Science Student</h3>
                    <section className="links-container">
                        <a href="https://github.com/MauroLuyten"><img className="icon invert" src={github} alt=""/></a>
                        <a href="https://www.linkedin.com/in/MauroLuyten/"><img className="icon invert" src={linkedin} alt=""/></a>
                        <a href="mailto:mauro.luyten@gmail.com"><img className="icon invert" src={gmail} alt=""/></a>
                        <a href="https://twitter.com/mauro_luyten"><img className="icon invert" src={twitter} alt=""/></a>
                    </section>
                </header>
                <section className="intro">
                    <h2 className="title">Welcome</h2>
                    <p className="App-intro">
                        Hi! I'm an aspiring developer from Leuven, Belgium.
                        <br/>
                        Feel free to check out my work below!

                    </p>
                </section>
                <Projects></Projects>
                <Footer></Footer>

            </div>
        );
    }

}

export default App;
