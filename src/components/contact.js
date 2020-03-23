import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class contact extends Component {
  render() {
    return(
      <div className="demo-tabs">
        <Grid className="contact-grid">

          <Cell col={6}>
            <h2 style={{color:"#bdc3c7"}}>I'd love to hear from you</h2>
            <p style={{display: 'flex',color:"#bdc3c7"}}>Whether you have a questions , doubts or anything else , I'm always ready to answer all your questions.</p>
            <hr style={{borderTop: '3px solid #757F9A'}}/>
            <h4 style={{color:"#bdc3c7"}}>GET IN TOUCH</h4>
            <div className="contact-list">
            <p style={{paddingTop:"1px"}}></p>
            
                  <div style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    9601450402
                  </div>
                  <p style={{paddingTop:"20px"}}></p>
        
                <div style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    8866534154
                    </div> 
                    
                    <p style={{paddingTop:"20px"}}></p>
        
              <div style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    mantriyash2025@gmail.com</div>


            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default contact;
