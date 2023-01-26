import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {blogsData} from './Data';

const truncateString = (string, number)=>{
  if(string.length>=number){
    return string.slice(0, number+1) + "....";
  }else{
    return string;
  };
};

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData);
  
  return (
    <div>
        <h1>Blog Page</h1>
        <section>
            {blogs.map((blog)=>{
            const {id,title,body} = blog;
            return <article key={id}>
              <h3>Title : {title}</h3>
              <p>Body : {truncateString(body, 20)}</p>
              <Link to={title}>Learn More</Link>
            </article>
            })}
        </section>
    </div>
  )
};

export default Blogs;