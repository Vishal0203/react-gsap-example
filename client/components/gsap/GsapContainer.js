import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Paper} from 'material-ui';
import {Grid} from 'react-flexbox-grid';
import {overlayColor, brandColor} from 'Assets/theme/application.theme';

class LandingContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setTimeout(() => {
      this.animateBox()
    }, 200);
  }

  animateBox() {
    const box = ReactDOM.findDOMNode(this.refs.box);
    TweenLite.to(box, 0.7, {left: 0});
  }

  render() {
    return (
      <div>
        <Paper zDepth={0} style={{backgroundColor: 'transparent'}}>
          <Grid>
            <div className="wrap main-container">
              <div ref="box" className="box">
                <div className="boxSmall"/>
                <div className="boxSmall boxTiny"/>
              </div>
            </div>
          </Grid>
        </Paper>
      </div>
    )
  }
}

export default LandingContainer;
