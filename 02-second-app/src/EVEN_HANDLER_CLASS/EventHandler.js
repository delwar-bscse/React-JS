import React, {Component} from 'react';

class EventHandler extends Component{
    constructor(props){
        super(props);
        this.state = {
            changeValue : ''
        };
    };
    
    changeHandler=(input)=>{
        this.setState({
            changeValue : input.target.value
        },()=>console.log(this.state.changeValue));
    };

    render(){
        return <div>
            <input type="text" onChange={this.changeHandler}/>
            <p>Result : {this.state.changeValue}</p>
        </div>
    }
}

export default EventHandler;