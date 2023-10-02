import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeTodo, handleCheckbox} from "../redux/todoApp/actions/index.js";
import styled from "styled-components";

function Todos({editFormVisibility, handleEditClick}) {
    const todos = useSelector((state) => state.operationsReducer);

    const dispatch = useDispatch()

    return todos.map((todo)=> (
        <div key={todo.id}>
               <Todoss>
                   {editFormVisibility === false && (
                       <input type="checkbox" checked={todo.completed} onChange={() => dispatch(handleCheckbox(todo.id))}/>
                   )}
                   <p className="todos-text" style={todo.completed === true?{textDecoration:'line-through'} : {textDecoration: 'none'}}>{todo.todo}</p>
               </Todoss>
               <div>
                   {editFormVisibility === false&&(
                       <Icons className="todos-icon">
                           <ion-icon name="create-outline" onClick={() => handleEditClick(todo)}></ion-icon>
                           <ion-icon name="trash-outline" onClick={() => dispatch(removeTodo(todo.id))}></ion-icon>
                       </Icons>
                   )}
               </div>

        </div>
    ))
}

export default Todos;

const Todoss = styled.div`
  display: flex;
  width: 250px;
  .todos-text {
    padding-left: 10px;
    color: green;
    font-size: 18px;
  }
 `

const Icons = styled.div`
 position: relative;
  top: -20px;
  left: 220px;
  padding: 0 10px;
  font-size: 20px;
 `