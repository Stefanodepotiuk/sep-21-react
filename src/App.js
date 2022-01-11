import './App.css';
import {useEffect, useState} from "react";

function App() {


  let [users,setUsers] = useState([]);
  let [posts,setPosts] = useState([]);
  let [comments,setCumments] = useState([]);


  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(value => value.json())
        .then(value => {

          setUsers(value);

        });

    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(value => value.json())
        .then(value => {

          setPosts(value);

        });

    fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then(value => value.json())
        .then(value => {

          setCumments(value);

        });


  }, []);


  return (

   <div className={'good'}>
     <ul className={'user'}>

       {users.map(value => <li key={value.id}> {value.name}</li>)}

     </ul>

       <ul className={'post'}>

           {posts.map(value => <li key={value.id}> {value.title}</li>)}

       </ul>

       <ul className={'comment'}>

           {comments.map(value => <li key={value.id}> {value.email}</li>)}

       </ul>

   </div>


  );
}

export default App;
