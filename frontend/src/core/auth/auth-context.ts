export interface AuthContext {
  isAuthenticated: () => boolean
}

export const authContext: AuthContext = {
  isAuthenticated: () => Boolean(localStorage.getItem('token')),
}
