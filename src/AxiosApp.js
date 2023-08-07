import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function AxiosApp() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/posts'
    }).then(function (response) {
      //console.log(typeof response.data);
      setPosts(response.data);
    });

  }, []);


  return (
    <div>
      <ul>
    {
      posts.map(post =>{
        return <li key={post.id}>{post.userId}:{post.title}</li>
      })
    }     
      </ul> 
    </div>
  );
}

export default AxiosApp;
