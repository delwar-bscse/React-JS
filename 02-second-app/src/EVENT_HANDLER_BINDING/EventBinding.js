import React, { Component } from 'react'

export default class EventBinding extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    };
    handleIncrement(){
        this.setState({
            count:this.state.count+1
        });
    };
    handleDecrement(){
        this.setState({
            count:this.state.count-1
        });
    };
  render() {
    const {count} = this.state;
    return (
      <div className='counter'>
        <p className='count'>Count : {count}</p>
        <div className='btn_div'>
            <button className='btn' onClick={this.handleIncrement.bind(this)} disabled={count>=5?true:false}>+</button>
            <button className='btn' onClick={this.handleDecrement.bind(this)} disabled={count<=0?true:false}>-</button>
        </div>
      </div>
    )
  }
}
