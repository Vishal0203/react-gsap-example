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

    TweenLite.fromTo(box, 2, {x: '-=200px'}, {x: 150, ease: Power4.easeInOut});
    TweenLite.to(box, 0.4, {top: '100%', y: '-100%', ease: Bounce.easeOut, delay: 2});
    TweenLite.to(box, 0.7, {x: '-=200px', y: '-100%', ease: Back.easeInOut, delay: 3});
    TweenLite.to(box, 0.8, {x: '-=200px', y: '-100%', ease: Back.easeInOut, delay: 4.2});
    TweenLite.to(box, 2.5, {top: '50%', y: '-50%', ease: Power0.easeNone, delay: 5});
    TweenLite.to(box, 2.5, {x: '+=400px', ease: Elastic.easeInOut, delay: 7.7});
    TweenLite.to(box, 2.5, {x: '-=400px', rotation: -720, ease: SlowMo.ease.config(0.1, 0.7, false), delay: 10.4});
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
