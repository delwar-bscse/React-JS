import React, {Component} from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

class Icons extends Component{
    render(){
        return <div>
            <h1>React fontawesome icons</h1>
            <div>
                <ul>
                    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
                    <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
                    <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
                </ul>
            </div>
        </div>
    }
}

export default Icons;