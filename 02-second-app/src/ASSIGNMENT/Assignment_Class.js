import React, {Component} from 'react';

class AssignmentClass extends Component{
    constructor(props){
        super(props);
        this.state={
            count : 0
        };
    };
    handleIncrese=()=>{
        this.setState({
            count : this.state.count + 1
        });
    };
    handleReset=()=>{
        this.setState({
            count : 0
        });
    };
    handleDecrese=()=>{
        this.setState({
            count : this.state.count - 1
        });
    };
    render(){
        const {count} = this.state;
        return <div className='counter'>
            <h1 className='title'>Assignment by Class Component</h1>
            <h1 className='count'>Counter : {count}</h1>
            <div className='btn_div'>
                <button className='btn' onClick={this.handleIncrese} disabled={count>=5?true:false}>+</button>
                <button className='btn' onClick={this.handleReset}>0</button>
                <button className='btn' onClick={this.handleDecrese} disabled={count<=0?true:false}>-</button>
            </div>
        </div>
    };
};

export default AssignmentClass;