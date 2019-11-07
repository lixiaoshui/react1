import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class Page extends Component {
    render() {
        let url = this.props.url;
        return (
            <div>
                {
                    [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                            <li key={item} className='bot'>
                                    <NavLink to={url+'/'+item}>{item}</NavLink>
                                </li>
                            ))
                }
            </div>
        )
    }
}
