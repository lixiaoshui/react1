import React, { Component } from 'react'
import {fetch} from 'whatwg-fetch'
import {NavLink} from 'react-router-dom'
import Page from './Page'
export default class Job extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let url = 'https://cnodejs.org/api/v1/topics?tab=job'
        fetch(url)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data
                })
            })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id !== this.props.match.params.id){
            let page = this.props.match.params.id;
            fetch("https://cnodejs.org/api/v1/topics?tab=job&page="+page)
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res);
                    this.setState({
                        data:res.data
                    });
                })
            }
    }
    render() {
        if(this.props.location.state == undefined){
            this.url = '/home';
        }
        else{
            this.url = this.props.location.state.url || '/home';
        }
        return (
            <div>
                    {
                        this.state.data.map(
                            (item,idx)=><ul key={idx}>
                                    <li>
                                        <img src={item.author.avatar_url} className='toux' />
                                        <span>{item.reply_count}/</span>
                                        <span>{item.visit_count}</span>
                                        <NavLink to={this.url+'/topic/'+item.id}>{item.title}</NavLink>
                                        <span className='shijian'>1天前</span>
                                    </li>
                            </ul>
                        )
                    }
                    <Page url={this.url+'/job'}/>
            </div>
            
        )
    }
}
