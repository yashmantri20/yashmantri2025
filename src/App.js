import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Grid, Cell} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Social from './components/Social';
import Education from './components/education';
import Skills from './components/skills';


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
        </Content>
        <Main/>
        
    </Layout>
    <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
              <p className="head"> </p>
            <img
              src="logo.jpg"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h2>Computer Engineer</h2>

            <hr/>

          <p>HTML/CSS | C/C++ | Java | JavaScript | Python | PHP</p>
          <div>
          <Social/>
          </div>
            </div>
          </Cell>
        </Grid>
        
      </div>

      <div className="header">
        <Grid>
          <Cell col={4}>
            <div style={{paddingTop:"20px",paddingLeft:"100px"}}>
              <img
                src="logo.jpg"
                alt="avatar"
                className="avatar-img"
                 />
            </div>

            <h2 style={{paddingTop: '2px',paddingLeft:"100px", color:"#bdc3c7"}}>Yash Mantri</h2>
            <h4 style={{color: 'white',paddingLeft:"160px"}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #757F9A',width:"50%", marginLeft:"100px"}}/>
            <p style={{color: '#bdc3c7'}}>I'm a self taught programmer and eager to learn new technologies. At present I'm in  3rd year of Computer Engineering. My curiosity levels are as fresh as when i was a child. I believe in eternal learning and deliberate effort as they are the only way to become the smartest in the room.
                
            </p>
            <hr style={{borderTop: '3px solid #757F9A', width: '50%', marginLeft:"100px"}}/>
            <h5 style={{color: 'white'}}>Address</h5>
            <p style={{color: '#bdc3c7'}}>33, Shiv Shakti Row House, Sachin, Surat</p>
            <h5 style={{color: 'white'}}>Phone</h5>
            <p style={{color: '#bdc3c7'}}>9601450402</p>
            <h5 style={{color: 'white'}}>Email</h5>
            <p style={{color: '#bdc3c7'}}>mantriyash2025@gmail.com</p>
            <hr style={{borderTop: '3px solid #757F9A', width: '50%', marginLeft:"100px"}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2 style={{paddingTop:"17px",color: 'white'}}>Education</h2>


            <Education
              startYear={2015}
              endYear={2017}
              schoolName="Gurukrupa Vidya Sankul"
              schoolDescription="Surat , Gujarat"
              course="High School (Science)"/>

               <Education
                 startYear={2017}
                 endYear="Expected graduation 2021"
                 schoolName="Uka Tarsadia University"
                 schoolDescription="Surat , Gujarat"
                 course="B.Tech Computer Engineering"
                  />
                <hr style={{borderTop: '3px solid #757F9A'}} />


              <h2 style={{color: 'white'}}>Skills</h2>
              <Skills
                skill="Python&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                progress={78}
                />
                <Skills
                  skill="HTML/CSS &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;"
                  progress={85}
                  />
                  <Skills
                skill="Javascript/Php&nbsp;&nbsp;"
                progress={80}
                />
                <Skills
                skill="Java&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                progress={70}
                />
                  <Skills
                    skill="C/C++&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                    progress={90}
                    />
                    <Skills
                      skill="React&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;"
                      progress={45}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}
</div>
    );
  }
}

export default App;
