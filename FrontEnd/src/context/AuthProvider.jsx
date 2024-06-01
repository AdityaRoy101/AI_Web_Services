import { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const GlobalContext = createContext({});

export const AuthProvider = ({ children }) => {
  
  const [userAuth, setUserAuth] = useState(null);

  useEffect(() =>{
    if(!userAuth){
      axios.get('/profile')
        .then(({data}) => {setUserAuth(data)
          console.log(data);
        })
    }
  },[])

  return (
    <main>
      <GlobalContext.Provider value={{ userAuth, setUserAuth }}>
        { children }
      </GlobalContext.Provider>
    </main>
  )
}
