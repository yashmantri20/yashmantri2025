import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid>
        <Cell col={12}>
          <div style={{display: 'flex',color:"#bdc3c7"}}>{this.props.skill}<ProgressBar style={{ margin:"1%", position:"-moz-initial",width: '75%'}} progress={this.props.progress} /> </div>
        </Cell>
      </Grid>
    )
  }
}

export default Skills;