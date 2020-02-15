import React from 'react';
import {Route,Link} from 'react-router-dom'
import Home,{About,WithRouterSample} from './Home'
import Profile from './Profile';

const App = () => {
    return(
        <div>
            <ul>
                <li><Link to="">홈</Link></li>
                <li><Link to="/about?detail=false">소개</Link></li>
                <li><Link to="/profile/a">a</Link></li>
                <li><Link to="/withRouter">withRouter</Link></li>
            </ul>
            <hr></hr>
            
            <Route path="/" component={Home} exact={true}></Route>
            {/* <Route path={/^\/(about|info)$/} component={About}></Route> */}
            <Route path={['/about','/info']} component={About} exact></Route>
            <Route path="/profile/:username" component={Profile} exact></Route>
            
        </div>        
    )
}


export default App;