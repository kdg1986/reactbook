import React from 'react';
import {Route,Link} from 'react-router-dom'
import Home,{About} from './Home'

const App = () => {
    return(
        <div>
            <ul>
                <li>
                    <Link to="">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
            </ul>
            <hr></hr>
            <Route path="/" component={Home} exact={true}></Route>
            <Route path="/about" component={About}></Route>             
        </div>        
    )
}


export default App;