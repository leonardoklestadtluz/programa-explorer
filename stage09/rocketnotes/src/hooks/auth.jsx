import { createContext, useContext } from 'react'

export const AuthContext = createContext({})

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={{ name: 'leonardo k luz', email: 'leonardo@email.com' }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth }