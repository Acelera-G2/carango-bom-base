const AuthService = {
    async login(user) {
      const response = await fetch(`${process.env.REACT_APP_URL_BASE}/auth`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 
            "Content-Type" : 'application/json',
        },
      })
      return await response.json()
    },
}  
export default AuthService