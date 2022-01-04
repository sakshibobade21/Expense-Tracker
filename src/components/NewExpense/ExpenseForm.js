import { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = () => {
//   const [enteredTitle, setEnteredTitle] = useState('');

//   const titleChangeHandler = (event) => {
//     setEnteredTitle(event.target.value);
//   }     

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''    
  })

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value }
    });
  }

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value }
    });
  }

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value }
    });
  }

  return <form>
    <div className='new-expense__controls'>
      <div className='new-expense__controls'>
        <label>Title</label>
        <input type='text' onChange={titleChangeHandler}></input>
      </div>
      <div className='new-expense__controls'>
        <label>Amount</label>
        <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}></input>
      </div>
      <div className='new-expense__controls'>
        <label>Date</label>
        <input type='date' min='2021-02-01' max='2022-02-01' onChange={dateChangeHandler}></input>
      </div>
    </div>
    <div className='new-expense__actions'>
      <button type='submit'>Add Expense</button>
    </div>
  </form>
}

export default ExpenseForm;