import { Redirect, Route, Switch } from 'react-router-dom'

import Layout from './components/layout/layout';
import AllQuotes from './pages/all-quotes';
import NewQuote from './pages/new-quote';
import NotFound from './pages/not-found';
import QuoteDetail from './pages/quote-detail';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetail />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
