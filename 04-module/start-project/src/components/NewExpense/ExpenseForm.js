import './ExpenseForm.css'

export const ExpenseForm = () => {
  const titleChangeHandler = e => {
    console.log(e.target.value)
  }

  const amountChangeHandler = e => {
    console.log(e.target.value)
  }

  const dateChangeHandler = e => {
    console.log(e.target.value)
  }

  return (
      <form>
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
