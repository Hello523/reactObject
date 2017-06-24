
import React from 'react';
import ReactDom from 'react-dom';
import {Hello,Animation,Botton,Ant1} from 'kr-ui';
import { Router, Route, hashHistory } from 'react-router';
class Content extends React.Component {


    render() {


        return (
          <Router history={hashHistory}>
            <Route path="/" component={Botton}/>
          </Router>
        )
    }
}

ReactDom.render(
    <Ant1 />
,
    document.getElementById('content')
);
