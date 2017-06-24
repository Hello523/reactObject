
import React from 'react';
import ReactDom from 'react-dom';
import TweenMax from 'gsap';
class Animation extends React.Component {
  
    constructor(props,context){
		super(props, context);
        this.state = {
            current:0
        }
	}

    componentDidMount () {
        TweenMax.allTo([this.refNode], 2, {
                x: '+=200px',
                backgroundColor: '#2196f3'
            },
            2,
        );
        // // TweenMax 可以做什么？
        // // 暂停
        // tween.pause();
        // // 继续播放
        // tween.resume();
        // // 反转播放
        // tween.reverse();
        // // 跳转到1s进度处开始播放
        // tween.seek(1);
        // // 重播
        // tween.restart();
        // // 动画变为三倍速
        // tween.timeScale(3);
    }

    componentWillUnmount () {
       
    }

   
    render() {
         return (
            <div
                id="ball"
                ref={c => (this.refNode = c)}
                style={{
                    width: '100px',
                    height: '100px',
                    margin: '100px',
                    borderRadius: '50%',
                    backgroundColor: 'red'
                }}>
            </div>
        );
    }
}
export default Animation;