import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import './style.scss'
import datalist from '../../utils/localData';
import {ScrollTop,offsetTop} from "../../utils/DomApi";
import PullRefresh from '../../components/pullRefresh'
export default class extends Component {
    constructor(props) {
        super(props);
        this.state={
            datalist:[1,2,3,5,6,7,8,9,9,0,12,3,4,5,6,7,8]
        }
    }
    componentDidMount() {

    }

    componentWillUnmount(){
    }

    render() {
        const {datalist}=this.state;
        return (
            <div>
                <h1 style={{textAlign:'center',fontSize:20,marginTop:30}}>
                    react 下拉刷新，上滑加载组件
                    <br/>
                    喜欢github给个star
                </h1>
                <div style={{textAlign:'center',lineHeight:'30px',height:'500px'}}>
                    <PullRefresh
                        windowScroll={true}
                        loadMoreBottom={1000}
                        needLoadMore={true}
                        onPull={(f)=>{
                            setTimeout(()=>{

                                f();
                            },500)

                        }}
                        onLoadMore={(r,f)=>{
                            setTimeout(()=>{
                                this.setState({
                                    datalist :[...datalist,1,2,3,4,5,6,7,8,9,10]
                                },()=>{
                                    if(datalist.length>=40){
                                        f()
                                    }else{
                                        r()
                                    }

                                })
                            },1000)

                        }}
                    >
                        <div>
                            <h1>野狼disco</h1>
                            这是最好的时代?这是最坏的时代
                            <br/>
                            前面儿什么富二代?我拿脚往里踹
                            <br/>
                            如此动感的节拍?非得搁门口耍帅
                            <br/>
                            我蹦迪的动线上面儿怎么能有障碍
                            <br/>
                            大背头?bb机?舞池里的007
                            <br/>
                            东北初代牌牌奇?dj瞅我也懵*
                            <br/>
                            不管多热都不能脱下我的皮大衣
                            <br/>
                            全场动作必须跟我整齐划一
                            <br/>
                            来?左边?跟我一起画个龙
                            <br/>
                            在你右边?画一道彩虹
                            <br/>
                            来?左边?跟我一起画彩虹
                            <br/>
                            在你右边?再画个龙
                            <br/>
                            在你胸口比划一个郭富城
                            <br/>
                            左边儿右边儿摇摇头
                            <br/>
                            两个食指就像两个钻天猴
                            <br/>
                            指向闪耀的灯球
                            <br/>
                        </div>
                        <div>
                            {this.state.datalist.map((i,index)=>{
                                return <div key={index}>{index}</div>
                            })}
                        </div>

                    </PullRefresh>
                </div>
            </div>


        )
    }
}