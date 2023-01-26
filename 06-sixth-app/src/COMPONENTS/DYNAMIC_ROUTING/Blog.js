import React from 'react';
import { useLocation} from 'react-router-dom';


const Blog = () => {
    const location = useLocation();
    const {title, body} = location.state;

    return (
    <div>
        <h1>{title.toUpperCase()} Page</h1>
        <p>{body.slice(0,301)}</p>
        <p>{body.slice(301,701)}</p>
    </div>
    );
};

export default Blog;
