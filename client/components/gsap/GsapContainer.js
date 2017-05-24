import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Paper} from 'material-ui';
import {Grid} from 'react-flexbox-grid';
import {TweenLite, CSSPlugin} from 'gsap';
import {overlayColor, brandColor} from 'Assets/theme/application.theme';

class LandingContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setTimeout(() => {
      this.animateBox()
    }, 500);
  }

  animateBox() {
    const box = ReactDOM.findDOMNode(this.refs.box);
    // TweenLite.to(box, 0.7, {left: 0, x: 0});

    // TweenLite.from(box, 2, {x: '-=200px', autoAlpha: 0});

    // TweenLite.set(box, {x: '-=200px', scale: 0.3});
    // TweenLite.set(box, {x: '+=100px', scale: 0.6, delay: 1});
    // TweenLite.set(box, {x: '-50%', scale: 1, delay: 2});

    TweenLite.fromTo(box, 2, {x: '-=200px'}, {x: 150, ease: Power4.easeOut});
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
