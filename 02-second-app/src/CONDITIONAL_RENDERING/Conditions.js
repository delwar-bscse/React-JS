import React, {Component} from 'react';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

class Conditions extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : true
        };
    };
    render(){
        const {isLoggedIn} = this.state;
        // return isLoggedIn && <HomePage />
        return isLoggedIn ? <HomePage /> : <LoginPage />
        // if(isLoggedIn){
        //     return <HomePage />
        // }else{
        //     return <LoginPage />
        // }
    }
}

export default Conditions; 