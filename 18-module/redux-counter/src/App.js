import { useSelector } from 'react-redux';

import Header from './components/Header'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter';

function App() {
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated)

  return (
    <>
      <Header />
      {isAuthenticated && <UserProfile />}
      {!isAuthenticated && <Auth />}
     <Counter />
    </>
  );
}

export default App;
