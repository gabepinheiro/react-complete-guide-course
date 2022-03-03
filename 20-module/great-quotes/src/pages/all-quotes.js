import QuoteList from '../components/quotes/QuoteList'

const DUMMY_DATA = [
  {id: 'q1', author: 'Max', text: 'Learning React is fun!'},
  {id: 'q2', author: 'Maximilian', text: 'Learning React is great!'}
]

function AllQuotes () {
  return (
    <>
      <h1>All Quotes Page</h1>
      <QuoteList quotes={DUMMY_DATA}/>
    </>
  )
}

export default AllQuotes
