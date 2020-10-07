import React from 'react';
import {Route, Link,Switch} from 'react-router-dom';
import Home from './Home';
import MyPage from './MyPage';
import Search from './Search';
import Settings from './Settings';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'


class MainComp extends React.Component {
    render(){
        return (
           
                <div>
                    
                    <Navbar bg="dark" variant="dark" sticky="top">
                        <Nav className="mr-auto">
                                <Link to="/home">Home</Link>
                                <Link to="/mypage">MyPage</Link>
                                <Link to="/search">Search</Link>
                                <Link to="/settings">Settings</Link>
                        </Nav>
                    </Navbar>
                    
                    <main>    
                    <Switch>
                        <Route exact path="/home" component={Home}/>
                        <Route path="/mypage" component= {MyPage}/>
                        <Route path="/search" component={Search}/>
                        <Route path="/settings" component={Settings}/>
                    </Switch>
                    </main>
                </div>               
        );
    }
}

export default MainComp;