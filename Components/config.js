module.exports = {
  server: "http://54.180.114.129:3000",
  testServer : "http://localhost:3000",
  access_token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYWFhIiwiaWF0IjoxNjY2MzQxNzg4LCJleHAiOjE2NjYzNTk3ODh9.LMfdrBx3mthZ21PKVoNLZfqky0iO9SbQsoXiGWcGi2s",
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
  getRequest : async (url ,token = null) =>  {

    let requestForm = {
      method : "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    }

    if (token != null) {
      requestForm["headers"]["Authorization"] = token
    }

    let response = await fetch(`http://localhost:3000${url}`, requestForm)

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