import { React, Component } from "react";

class STATE extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }
    handleIncrement=()=>{
        this.setState({
            count : this.state.count + 1
        });
    };
    handleDecrement=()=>{
        this.setState({
            count : this.state.count - 1
        });
    };

    render(){
        const {count} = this.state;
        return <div className="counter">
            <h1 className="count">Count : {count}</h1>
            <div className="btn_div">
                <button className="btn" onClick={this.handleIncrement} disabled={count>=5 ? true:false}>+</button>
                <button className="btn" onClick={this.handleDecrement} disabled={count<=0 ? true:false}>-</button>
            </div>
        </div>
    };
};

export default STATE;