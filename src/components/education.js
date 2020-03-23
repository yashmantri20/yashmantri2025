import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p style={{color: '#bdc3c7'}}>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px',color: '#bdc3c7'}}>{this.props.schoolName}</h4>
          <p style={{color: '#bdc3c7'}}>{this.props.schoolDescription}<br/>{this.props.course}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;