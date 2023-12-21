import React, { Component } from 'react';
import './App.css';
import Header from './header';
import SocialLinks from './SocialLinks';
import About from './About';
import Projects from './Projects';
import Contact from './contact';
import Footer from './Footer';
import Menu from './Menu';
import Nav from './Nav';

class App extends Component {
    state = { loading: false };

    componentDidMount() {
        // 测试 devServer 的代理功能
        // fetch('/api/category')
        //     .then(resp => resp.json())
        //     .then(res => console.log('here here', res));
    }

    render() {
        return (
            <div className="body">
                <Menu />
                <Nav />
                <Header />
                <About />
                <Projects />
                <Contact />
                <Footer />
                <SocialLinks />
            </div>
        );
    }
}

export default App;
