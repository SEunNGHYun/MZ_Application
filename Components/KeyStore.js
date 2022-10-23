import { createContext, useState, useContext } from 'react'

export const keyContext = createContext();

export default function KeyProvider({children}) {
  const [access_key, setAccessKey] = useState('');

  return (
    <keyContext.Provider value={[access_key, setAccessKey]}>
      {children}
    </keyContext.Provider>
  )
  //자동 로그인할 때 사용
  //로그인시 accesskey 저장해야 할 때 사용
}

