import React, {Component} from 'react';

class Card2 extends Component{
    render(){
        const {title,des} = this.props;
        return <div>
            <h2>{title}</h2>
            <p>{des}</p>
        </div>
    }
};

export default Card2;