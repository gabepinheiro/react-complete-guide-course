import './ExpenseForm.css'

export const ExpenseForm = () => {
  return (
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input id="title" type="text" />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input id="amount" type="number" min='0.01' step='0.01' />
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input id="date" type="date" min='2019-01-01' step='2023-12-31' />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
  )
}
