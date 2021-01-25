import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../data'
import { v4 as uuidv4 } from 'uuid';

// reducer function
const reducer = (state, action) => {
    console.log(state, action)
    if (action.type === 'ADD_ITEM') {
        const newItem = [...state.people, action.payload]
        return {
          ...state,
          people: newItem,
          isModalOpen: true,
          modalContent: "Item added to list",
        };
    }
    if (action.type === 'NO_VALUE') {
        return {
          ...state,
          isModalOpen: true,
          modalContent: "Please enter something",
        };
    }
    if (action.type === "closeModal") {
      return { ...state, isModalOpen: false };
    }
    if (action.type === 'REMOVE') {
        const newPeople = state.people.filter(person => person.id !== action.payload)
        return {
            ...state, people: newPeople
        }
    }
    throw new Error('invalid input')
}
function Index () {
    const [name, setName] = useState('')
    const [state, dispatch] = useReducer(reducer, { people: [], isModalOpen: false, modalContent: ''})
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
           const newItem = { id: uuidv4(), name}
            dispatch({ type: 'ADD_ITEM', payload: newItem }) 
            setName('')
        } else {
           dispatch({type: 'NO_VALUE'}) 
        }
        
    }
    const closeModal = () => {
      dispatch({type: 'closeModal'})  
    }
    
    return (
        <>
            {state.isModalOpen && <Modal closeModal={closeModal} content={state.modalContent} />} 
            <form onSubmit={handleSubmit} className='form'>
                <div>
                    <input type="text" onChange={(e)=> setName(e.target.value)}
                        value={name}
                />
                </div>
                <button type="submit">Add</button>
            </form>
            {state.people.map(person => {
                return (
                    <div key={person.id} className='item'>
                        <h4>{person.name}</h4>
                       <button onClick={()=> dispatch({type: 'REMOVE', payload: person.id})}>Remove</button>
                    </div>
                )
            })}
        </>
    )
}

export default Index
