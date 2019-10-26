import React,{Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from '../../containers/main';
import connectRoute from '../../utils/connectRoute';



const HMain = connectRoute(Main);

export default class extends Component {
    componentDidUpdate(){
    }
    render(){
        const {match}=this.props;


        return (<div>
                    <Switch>
                        <Route exact path={match.url} component={HMain}/>
                    </Switch>
               </div>)
    }
}