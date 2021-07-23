const getToken = localStorage.getItem('@calango:token')

export const HeaderApi = {
    async getHeader (url,headersMethods){
        const response = await fetch(`${process.env.REACT_APP_URL_BASE}/${url}`,{
            headersMethods,
            headers: { 
                "Content-Type" : 'application/json',
                "authorization" :`Bearer ${getToken}`
              }
        })
        return response.json()
    }
}