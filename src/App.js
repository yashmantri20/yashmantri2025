import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             color: "",
             color1: "",
             color2: "",
             color3: ""
        }
    }

    handler = () => {
        this.setState({
            color: "#2C5364"
        })
    }

    down = () => {
        this.setState({
            color: ""
        })
    }

    handler1 = () => {
        this.setState({
            color1: "#2C5364"
        })
    }

    down1 = () => {
        this.setState({
            color1: ""
        })
    }

    handler2 = () => {
        this.setState({
            color2: "#2C5364"
        })
    }

    down2 = () => {
        this.setState({
            color2: ""
        })
    }

    handler3 = () => {
        this.setState({
            color3: "#2C5364"
        })
    }

    down3 = () => {
        this.setState({
            color3: ""
        })
    }
  render() {
      
    return (
      <div className="demo-big-content">
          
    <Layout>
        <Header className="header" title="Yash Mantri" scroll>
            <Navigation>
                <Link style={{backgroundColor: this.state.color}} onMouseEnter={this.handler} onMouseLeave={this.down} to="/home">Home</Link>
                <Link style={{backgroundColor: this.state.color1}} onMouseEnter={this.handler1} onMouseLeave={this.down1} to="/aboutme">About Me</Link>
                <Link style={{backgroundColor: this.state.color2}} onMouseEnter={this.handler2} onMouseLeave={this.down2} to="/projects">Projects</Link>
                <Link  style={{backgroundColor: this.state.color3}} onMouseEnter={this.handler3} onMouseLeave={this.down3} to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer style={{backgroundColor: '#2C5364',color: 'Black'}} title="Social Accounts">
            <Navigation>
                <a style={{color: 'Black'}} href="https://www.youtube.com/channel/UCuZMVKtjcdkx0IjU2WUjVdA">Youtube</a>
                <a style={{color: 'Black'}}  href="https://github.com/yashmantri20">Github</a>
                <a style={{color: 'Black'}} href="https://twitter.com/yashmantri20">Twitter</a>
                <a style={{color: 'Black'}}href='https://www.instagram.com/yashmantri'>Instagram</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
