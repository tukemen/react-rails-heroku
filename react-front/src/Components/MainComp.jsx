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
                    <header>
                    <Navbar bg="dark" variant="dark" sticky="top" >
                        <Nav className>
                                <Nav.Item><Nav.Link as={Link} to="/home">Home</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link as={Link} to="/mypage">MyPage</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link as={Link} to="/search">Search</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link as={Link} to="/settings">Settings</Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar>
                    </header>
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