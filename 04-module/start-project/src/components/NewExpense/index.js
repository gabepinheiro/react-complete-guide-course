import { ExpenseForm } from "./ExpenseForm"

import './NewExpense.css'

export const NewExpense = (props) => {
  const saveExpenseDataHandler = data => {
    console.log('In NewExpense.js')
    const expense = {
      ...data,
      id: crypto.randomUUID()
    }
    console.log(expense)
    props.onAddExpense(expense)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}
