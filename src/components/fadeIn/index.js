import React,{Component} from 'react';
import './style.scss';
 export default class extends Component{
        constructor(props){
            super(props)
            this.state={
                animate:false
            }
        }
        componentWillMount() {
        }
        componentDidMount() {
            setTimeout(()=>{
                this.setState({
                    animate:true
                })
            },0)
        }
        componentWillUnmount() {
                this.setState({
                    animate:false
                })
        }

     render() {
            const {children}=this.props;
            const {animate}=this.state;
            return <div className={animate?'fadeIn fade':'fadeOut fade'}>
                {children}
            </div>
        }
    }
