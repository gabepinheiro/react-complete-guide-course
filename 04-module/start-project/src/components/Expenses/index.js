import { ExpensesFilter } from './ExpenseFilter'
import { ExpenseItem } from './ExpenseItem'
import { Card } from '../UI/Card'

import './Expenses.css'
import { useState } from 'react'

export const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    setSelectedYear(selectedYear)
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={selectedYear}
        onChangeFilter={filterChangeHandler}
       />
      <ExpenseItem
        title={props.items[0].title}
        date={props.items[0].date}
        amount={props.items[0].amount}
      />
      <ExpenseItem
        title={props.items[1].title}
        date={props.items[1].date}
        amount={props.items[1].amount}
      />
      <ExpenseItem
        title={props.items[2].title}
        date={props.items[2].date}
        amount={props.items[2].amount}
      />
    </Card>
  )
}
