import React, { useRef } from 'react'

const UserForm = () => {
    const nameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log(nameRef.current.value);
        console.log(passwordRef.current.value);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name : </label>
                <input type="text" name="name" ref={nameRef} />
            </div>
            <div>
                <label htmlFor='password'>Password : </label>
                <input type="password" name="password" ref={passwordRef}/>
            </div>
            <button type="submit" >Submit</button>
        </form>
    );
};

export default UserForm;
