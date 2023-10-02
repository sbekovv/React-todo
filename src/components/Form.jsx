import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import { addTodo, handleEditSubmit } from "../redux/todoApp/actions/index.js";
import styled from "styled-components";


function Form({editFormVisibility, editTodo, cancelUpdate}) {
    const [todoValue, setTodoValue] = useState('');

    const [editValue, setEditValue] = useState('');

    useEffect(() => {
        setEditValue(editTodo.todo)
    },[editTodo])

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        let date = new Date();
        let time = date.getTime()
        let todoObj = {
            id: time,
            todo: todoValue,
            completed: false
        }
        setTodoValue('');
        dispatch(addTodo(todoObj))
    }

    const editSubmit = (e) => {
        e.preventDefault();
        let editedObj = {
            id: editTodo.id,
            todo: editValue,
            completed: false
        }
        dispatch(handleEditSubmit(editedObj))
    }

    return (
       <Forms>
           {editFormVisibility === false ? ( <form onSubmit={handleSubmit}>
               <label className="formText">Добавьте задачу</label>
               <div>
                   <Inputs type="text" required value={todoValue}
                          onChange={(e) => setTodoValue(e.target.value)}/>
                   <Buttons type="submit">Add</Buttons>
               </div>
           </form>) : ( <form onSubmit={editSubmit}>
               <label className='formText'>Изменить задачу</label>
               <div>
               <Inputs type="text" required value={editValue || ''} onChange={(e) => setEditValue(e.target.value)}/>
               <Buttons type="submit">Изменить</Buttons>
               </div>
               <Buttons style={{margin: '-20px 0 40px 20px'}} type="button" onClick={cancelUpdate}>Назад</Buttons>
               </form>)}
       </Forms>
    );
}

export default Form;

const Inputs = styled.input`
  width: 200px;
  height: 34px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin: 20px;
  caret-color: #b63dee;
  color: #b63dee;

  &:focus {
    outline: none;
    border-color: #007bff; 
  }
`

export const Buttons = styled.button`
  background: red;
  border: none;
  cursor: pointer;
  padding: 10px 15px;
  color: white;
  border-radius: 6px;

  &:hover {
    background: #9a1616;
  }

  &:active {
    background: #be0b0b;
  }
`

const Forms = styled.div`
    .formText {
      color: red;
      font-size: 18px;
      padding: 0 70px;
    }
`