import React from 'react';
import qs from 'qs';
import {withRouter} from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <h1>홈</h1>
            <p>홈, 그 페이지는 가장 먼저 보여지는 페이지.</p>
        </div>
    )
}

export const About = ({location}) => {
    
    const query = qs.parse(location.search ,{ ignoreQueryPrefix : true })    
    const showDetail = query.detail === 'true';
    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트 입니다.</p>
            { showDetail && <p>detail 값을  true로 설정하셨군요!</p> }
            <WithRouterSample></WithRouterSample>
        </div>
    )
}



export const WithRouterSample = withRouter(  
    ({location,match,history}) => {
        return(
            <div>
                <h4>location</h4>
                <textarea
                    value={JSON.stringify(location,null,2)}
                    rows={7}
                    readOnly
                ></textarea>    

                <h4>match</h4>
                <textarea
                    value={JSON.stringify(match,null,2)}
                    rows={7}
                    readOnly
                ></textarea>    
                <button onClick={() => history.push('/')}>홈으로</button>
            </div>
        )
    })


export default Home;