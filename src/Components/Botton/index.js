import React from 'react';
import ReactDom from 'react-dom';
import { Button } from 'antd';
class Botton extends React.Component {
     constructor(props,context){
		super(props, context);
        this.state = {
            current:0
        }
	}

    componentDidMount () {
        
    }

    componentWillUnmount () {
       
    }

   
    render() {
         return (
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
            </div>
        );
    }
}
export default Botton;