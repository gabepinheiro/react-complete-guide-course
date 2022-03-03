import { useEffect } from 'react'
import useHttp from '../hooks/use-http'
import { getAllQuotes } from '../lib/api'

import QuoteList from '../components/quotes/QuoteList'
import NotQuotesFound from '../components/quotes/NoQuotesFound'
import Loading from '../components/UI/LoadingSpinner'

function AllQuotes () {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error
  } = useHttp(getAllQuotes, true)

  useEffect(() => {
    sendRequest()
  }, [sendRequest])

  return (
    <>
      {status === 'pending' && (
        <div className="centered">
          <Loading />
        </div>
      )}
      {error && (
        <p className="centered focused">{error}</p>
      )}
      {(status === 'completed' && (!loadedQuotes || !loadedQuotes.length)) && (
        <NotQuotesFound />
      )}
      {(loadedQuotes && !!loadedQuotes.length ) && <QuoteList quotes={loadedQuotes}/>}
    </>
  )
}

export default AllQuotes
