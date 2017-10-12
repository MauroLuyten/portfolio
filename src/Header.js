import React,{Component} from 'react'


class Header extends Component {
    openResume() {
        window.location.href = require('./assets/Resume.pdf')
    }
    render() {
        return (
        <header className="App-header">
            <div id="resume-button" onClick={this.openResume}><a href="#">Resume</a></div>
            <img src={require('./assets/avatar3.jpg')} className="App-logo" alt="logo"/>
            <h1 className="App-title">Mauro Luyten</h1>
            <h3 className="App-subtitle">Computer Science Student</h3>
            <section className="links-container">
                <a href="https://github.com/MauroLuyten"><img className="icon invert" src={require('./assets/github.svg')} alt=""/></a>
                <a href="https://www.linkedin.com/in/MauroLuyten/"><img className="icon invert" src={require('./assets/linkedin.svg')} alt=""/></a>
                <a href="mailto:mauro.luyten@gmail.com"><img className="icon invert" src={require('./assets/gmail.svg')} alt=""/></a>
                <a href="https://twitter.com/mauro_luyten"><img className="icon invert" src={require('./assets/twitter.svg')} alt=""/></a>
            </section>
        </header>
        )
    }
}
export default Header