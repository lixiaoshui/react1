import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import All from './All'
import Good from './Good'
import Share from './Share'
import Ask from './Ask'
import Job from './Job'
import Dev from './Dev'
import Detail from './Detail';

export default class Home extends Component {
    render() {
        let {url} = this.props.match
        return (
            <div>
                <div className='top1'>
                    <Link to={{pathname:url+'/all/1',state:url}} className='top2'>全部</Link>
                    <Link to={{pathname:url+'/good/1',state:url}} className='top2'>精华</Link>
                    <Link to={{pathname:url+'/share/1',state:url}} className='top2'>分享</Link>
                    <Link to={{pathname:url+'/ask/1',state:url}} className='top2'>问答</Link>
                    <Link to={{pathname:url+'/job/1',state:url}} className='top2'>招聘</Link>
                    <Link to={{pathname:url+'/dev/1',state:url}} className='top2'>客户端测试</Link>
                </div>
                <div>
                    <Route exact path={url+'/all'} component={All} />
                    <Route path={url+'/all/:id'} component={All} />
                    <Route exact path={url+'/good'} component={Good} />
                    <Route path={url+'/good/:id'} component={Good} />
                    <Route exact path={url+'/share'} component={Share} />
                    <Route path={url+'/share/:id'} component={Share} />
                    <Route exact path={url+'/ask'} component={Ask} />
                    <Route path={url+'/ask/:id'} component={Ask} />
                    <Route exact path={url+'/job'} component={Job} />
                    <Route path={url+'/job/:id'} component={Job} />
                    <Route exact path={url+'/dev'} component={Dev} />
                    <Route path={url+'/dev/:id'} component={Dev} />
                    <Route path={url+'/topic/:id'} component={Detail} />
                </div>
            </div>
        )
    }
}
