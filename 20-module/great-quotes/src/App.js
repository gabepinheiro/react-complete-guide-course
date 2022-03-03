import { Route, Switch } from 'react-router-dom'
import AllQuotes from './pages/all-quotes';
import NewQuote from './pages/new-quote';
import QuoteDetail from './pages/quote-detail';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetail />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
