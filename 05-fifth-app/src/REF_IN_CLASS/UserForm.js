import React, {Component, createRef} from 'react';

class UserForm extends Component{
    constructor(props){
        super(props);
        this.nameRef = createRef();
        this.passwordRef = createRef();
        this.state = {}
    };

    handleSubmit =(event)=>{
        event.preventDefault();
        console.log(this.nameRef.current.value);
        console.log(this.passwordRef.current.value);
    }

    render(){
        return <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor='name'>Name : </label>
                <input type="text" name="name" ref={this.nameRef} />
            </div>
            <div>
                <label htmlFor='password'>Password : </label>
                <input type="password" name="password" ref={this.passwordRef} />
            </div>
            <button type="submit" >Submit</button>
        </form>
    }
};

export default UserForm;