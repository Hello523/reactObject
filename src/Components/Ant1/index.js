import React from 'react';
import ReactDom from 'react-dom';
import TweenOne from 'rc-tween-one';
import './index.less';

class Ant1 extends React.Component {

  constructor(props) {
    super(props);
    this.animation = { left: '20%', yoyo: true, repeat: -1, duration: 1000 };
  }

  render() {
    return (
      <TweenOne
        animation={this.animation}
        paused={false}
        style={{ left: '-20%' }}
        className="code-box-shape"
      />
    );
  }
}
export default Ant1;