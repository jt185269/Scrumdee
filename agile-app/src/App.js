import './App.css';
import { useState } from 'react';
import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'
import { Login } from './Login';
import { NavMenu } from './NavMenu';

const queryClient = new QueryClient()



function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  async function fetchUser() {
    let options= {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Email: user.email, Password: user.password })
    }
    console.log(user);
    const res = await fetch('http://localhost:5000/api/login', options);
    return res.json();
  }

  function Auth() {

    const {data, status, error} = useQuery(['memes'], fetchUser);
    console.log(data);
    const loggedInUser= data
    if (status === 'loading') {
      return <p>loading...</p>
    }

    if (status === 'error') {
      console.log(error)
      return <p>ERROR!</p>

    }
    if (status === 'success' && data != null) {
      return <NavMenu user={loggedInUser}/>
    } else {
      return <p>login unsuccessful rip</p>
    }

  }

  const onAuth = (user) => {
    setUser(user)
    setAuth(true)
  }
  return (
      <>
        <QueryClientProvider client={queryClient}>
          {!auth && <Login onAuth={onAuth}/>}
          {auth && <Auth/>}
        </QueryClientProvider>
      </>
  );
}

export default App;
