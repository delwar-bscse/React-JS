import React, {Component} from 'react';

//Mounting : constructor -> render -> componentDidMount
//Updating : state/props -> shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate
//Unmounting : componentWillUnmount

class LifeCycle extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
        console.log("constructor");
    };

    componentDidMount(){
        console.log("componentDidMount");
    };

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
    };

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    handleClick =()=>{
        this.setState({
            count: this.state.count + 1
        });
    };

    render(){
        {console.log("render")}
        return <div>
            <h1>Class life cycle</h1>
            <h3>Count : {this.state.count}</h3>
            <button onClick={this.handleClick}>+</button>
        </div>
    };
};

export default LifeCycle;