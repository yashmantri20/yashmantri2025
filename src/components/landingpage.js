import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Social from './Social';




class landingpage extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
              <p className="head"> </p>
            <img
              src="logo192.jpg"
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
  
          
          {/* <div className="social-links">

          
          <a href="https://stackoverflow.com/questions/26814297/want-to-make-font-awesome-icons-clickabl" >
            <i className="fa fa-linkedin-square"></i>
          </a>

          
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>

          
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div> */}
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default landingpage;