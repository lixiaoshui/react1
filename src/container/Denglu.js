import React from 'react'
import {useHistory} from 'react-router-dom';
export default  function Denglu(){
        let history = useHistory();
        function toHome(){
            history.push('/home');
        }
        return (
            <div>
                <div className='inputk'>
                    用户名：<input />
                    密码：<input />
                </div>
                <div>
                    <button className='submit' onClick={toHome}>登陆</button>
                </div>
            </div>
        )
}
