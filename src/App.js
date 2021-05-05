import React,{useState,useEffect} from 'react';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos,setTodos]=useState([]);
  const [input,setInput]=useState('');

  useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      // console.log(snapshot.docs.map(doc=>doc.data()));
      setTodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})));
    })
  },[])

  const updateList=(e)=>{
    e.preventDefault();
    // setTodos([...todos,input])
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }


  return (
    <div className="App">
      <form>
        <input type="text" value={input} onChange={e=>setInput(e.target.value)}></input>
        <button disabled={!input} type="submit" onClick={updateList}>Add Todo</button>
      </form>
      <ul>
        {todos.map(todo=>(
          <Todo todo={todo}></Todo>
        ))}
      </ul>
    </div>
  );
}

export default App;
