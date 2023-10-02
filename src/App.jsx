import React, {useState} from 'react';
import Form from "./components/Form.jsx";
import Todos from "./components/Todos.jsx";
import {useDispatch, useSelector} from "react-redux";
import {deleteAll} from "./redux/todoApp/actions/index.js";
import {Buttons} from '../src/components/Form'
import styled from "styled-components";

function App() {
    const [editFormVisibility, setEditFormVisibility] = useState(false);
    const [editTodo, setEditTodo] = useState('');

    const handleEditClick = (todo) => {
        setEditFormVisibility(true);
        setEditTodo(todo);
    }

    const cancelUpdate = () => {
        setEditFormVisibility(false);
    }

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.operationsReducer);

    return (
        <Apps className="app">
            <h1>Redux-Todo-app</h1>
            <Form cancelUpdate={cancelUpdate} editFormVisibility={editFormVisibility} editTodo={editTodo}/>
            <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
            {todos.length > 1&&(
                <Buttons style={{margin: '20px 0 0 -140px'}} onClick={()=> dispatch(deleteAll())}>Delete All</Buttons>
            )}
        </Apps>
    );
}

export default App;

const Apps = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`