module.exports = {
  server: "http://54.180.114.129:3000",
  testServer : "http://localhost:3000",
  postRequest : async (url ,body) =>  {
    const response = await fetch(`http://localhost:3000${url}`, {     
      method : "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify(body)
    })

    return response.json()
  },
  getRequest : async (url ,token) =>  {
    const response = await fetch(`http://localhost:3000${url}`, {
      method : "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authentication' : token
      }
    })
    
    return response.json()
  },
  patchRequest : async (url ,body) =>  {
    const response = await fetch(`http://localhost:3000${url}`, {     
      method : "PATCH",
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify(body)
    })

    return response.json()
  },
}