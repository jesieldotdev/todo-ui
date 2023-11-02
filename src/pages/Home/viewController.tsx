import { useState } from "react"
import {v4 as uuidv4} from 'uuid'
import { useSelector, useDispatch} from 'react-redux'
import {AppState, AppDispatch } from '../../redux/store'
import utils from '../../redux/store'
import tasks from '../../redux/tasks'

interface TaskProps {
    id: number | string
    title: string
    body: string
}

export const ViewController = () =>{

  const dispatch: AppDispatch = useDispatch()
  const tarefas = useSelector((state: AppState) => state.tasks);
  const addTask = useSelector((state: AppState) => state.addTodo);
  const isOpen = useSelector((state: AppState ) => state.utils)
 
   
  
  
  
    return {
        tasks, tarefas, utils, isOpen
    }
}