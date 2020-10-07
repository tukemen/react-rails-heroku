import React from 'react';
import axios from 'axios';


class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            text: null
        };
    }

    componentDidMount(){
        const fetchInit = {
            headers: {"content-type": "application/json"}
        }

        axios.get(`http://localhost:3001/hello`,fetchInit)
        .then((response) =>{
            this.setState({text: response.data.text});
            
        })
        .catch((response) => {
            console.log(response);
        })
    }

    
    render(){
        
        return (
            <div>
            <h1>Home</h1>
            result:{this.state.text}
            
            </div>
        );
    }
}

export default Home;