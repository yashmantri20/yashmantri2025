import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Social from './Social';




class home extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
              <p className="head"> </p>
            <img
              src={require('./logo.jpg')}
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
    )
  }
}

export default home;