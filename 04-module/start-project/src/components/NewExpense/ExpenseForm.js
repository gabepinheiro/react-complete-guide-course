import { useState } from 'react'
import './ExpenseForm.css'

export const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = e => {
    setEnteredTitle(e.target.value)
  }

  const amountChangeHandler = e => {
    setEnteredAmount(e.target.value)
  }

  const dateChangeHandler = e => {
    setEnteredDate(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault()

    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    console.log(expenseDate)
  }

  return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              name="amount"
              type="number"
              min='0.01'
              step='0.01'
              onChange={amountChangeHandler}
             />
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              min='2019-01-01'
              step='2023-12-31'
              onChange={dateChangeHandler}
             />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
  )
}
