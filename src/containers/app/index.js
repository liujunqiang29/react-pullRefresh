import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../../containers/home';
import connectRoute from '../../utils/connectRoute';
import './style.scss';


const HHome = connectRoute(Home);

export default class extends Component {
    render() {
        return <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={HHome}/>
                    <Route   path='/home' component={HHome}/>
                </Switch>
            </Router>
        </div>
    }

}