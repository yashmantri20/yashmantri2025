import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';


class aboutme extends Component {
  render() {
    return(
      <div className="demo-tabs">
        <Grid>
          <Cell col={4}>
            <div style={{paddingTop:"20px",paddingLeft:"100px"}}>
              <img
                src={require('./logo.jpg')}
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

export default aboutme;