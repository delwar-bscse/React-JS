import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { blogsData } from './Data';


const Blog = () => {
    const {title} = useParams();
    const [bodyData, setBodyData] = useState("");

    useEffect(()=>{
        const bodyText = blogsData.filter((blog)=>blog.title===title);
        setBodyData(bodyText[0].body);
    },[]);

    return (
    <div>
        <h1>{title}</h1>
        <p>{bodyData.slice(0,301)}</p>
        <p>{bodyData.slice(301,701)}</p>
    </div>
    );
};

export default Blog;
