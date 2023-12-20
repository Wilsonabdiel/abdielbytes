import React, { Component } from 'react';
import './App.css';
import Main from './main';

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

            <Main />

        );
    }
}

export default App;
