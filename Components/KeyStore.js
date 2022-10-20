import {createContext, useState, useContext} from 'react'

const keyContext = createContext();

export function KeyProvider({children}) {
  const [access_key] = useState('');

  return (
    <keyContext.Provider value={access_key}>
      {children}
    </keyContext.Provider>
  )
  //자동 로그인할 때 사용
  //로그인시 accesskey 저장해야 할 때 사용
}


export function useKeyContext() {
  const key = useContext(keyContext);
  if (key === undefined) {
    throw new Error('useCounterState should be used within CounterProvider');
  }
  return key;
}