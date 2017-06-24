
import React from 'react';
import ReactDom from 'react-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import './index.less';
var INTERVAL = 2000;

class Hello extends React.Component {
  
    constructor(props,context){
		super(props, context);
        this.state = {
            current:0
        }
	}

    componentDidMount(){
        this.interval = setInterval(this.tick, INTERVAL);
    }

    componentWillUnmount () {
        clearInterval(this.interval);
    }

    tick = () => {
        this.setState({current: this.state.current + 1});
    }

    render() {
        var children = [];  
        var pos = 0;
        var colors = ['red', 'gray', 'blue'];
        for (var i = this.state.current; i < this.state.current + colors.length; i++) {
            var style = {
                left: pos * 128,
                background: colors[i % colors.length]
            };
            pos++;
            children.push(<div key={i} className="animateItem" style={style}>{i}</div>);
        }
        return (
            <CSSTransitionGroup
                className="animateExample"
                transitionEnterTimeout={1500}
                transitionLeaveTimeout={1500}
                transitionName="example">
                {children}
            </CSSTransitionGroup>
        );
    }
}
export default Hello;