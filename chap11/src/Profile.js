import React from 'react';
import qs from 'qs';
import {WithRouterSample} from './Home'

const data = {
    a : {
            name : 'aaasd'
            ,desc : 'desc'
    },
    b : {
        name : 'b'
        ,desc : 'desc'
    }

}


const Profile = ({match}) => {
    const { username } = match.params;    
    const profile = data[username];    
    if( !profile ) return <div>존재하지않는 사용자 입니다.</div>
        
    return (
        <div>
            <h3>{username}({profile.name})</h3>
            <p>{profile.desc}</p>
            <WithRouterSample></WithRouterSample>
        </div>
    )
}

export default Profile;