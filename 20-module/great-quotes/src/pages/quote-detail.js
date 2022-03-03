import { useEffect } from "react"
import {
  Link,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom"
import useHttp from '../hooks/use-http'
import { getSingleQuote } from "../lib/api"


import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import LoadingSpinner from "../components/UI/LoadingSpinner"

function QuoteDetail () {
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error
  } = useHttp(getSingleQuote, true)

  const { quoteId } = useParams()
  const match = useRouteMatch()

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  return (
    <>
     {status === 'pending' && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      {(status === 'completed' && error) && (
        <p className="centered focused">{error}</p>
      )}
      {(status === 'completed' && !loadedQuote.text) && (
        <p>No quote found!</p>
      )}
      {loadedQuote && (
        <>
          <HighlightedQuote
            text={loadedQuote.text}
            author={loadedQuote.author}
          />
          <Route path={match.path} exact>
            <div className="centered">
              <Link
                className='btn--flat'
                to={`${match.url}/comments`}
              >
                Load comments
              </Link>
            </div>
          </Route>
          <Route path={`${match.path}/comments`}>
            <Comments />
          </Route>
        </>
      )}
    </>
  )
}

export default QuoteDetail
