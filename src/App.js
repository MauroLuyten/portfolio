import React, {Component} from 'react';
import avatar from './assets/avatar3.jpg';
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'
import twitter from './assets/twitter.svg'
import gmail from './assets/gmail.svg'
import Header from './Header.js'
import Intro from './Intro.js'
import Projects from './Projects.js'
import Footer from './Footer.js'
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header></Header>
                <Intro></Intro>
                <Projects></Projects>
                <Footer></Footer>
            </div>
        );
    }

}

export default App;
