module.exports = {
  server: "http://54.180.114.129:3000",
  testServer : "http://localhost:3000",
  access_token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYWFhIiwiaWF0IjoxNjY2MzUxNDc3LCJleHAiOjE2NjYzNjk0Nzd9.s2XNzHbcYsxhttToD9ubOXZyiTotGwMUyADxxof04_o",
  postRequest : async (url ,body, token = null) =>  {

    let requestForm = {     
      method : "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify(body)
    }

    if (token != null) {
      requestForm["headers"]["Authorization"] = token
    }

    let response = await fetch(`http://localhost:3000${url}`, requestForm)

    return await response.json()
  },
  getRequest : async (url ,token = null) =>  {

    let requestForm = {     
      method : "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    }

    if (token != null) {
      requestForm["headers"]["Authorization"] = token
    }

    let response = await fetch(`http://localhost:3000${url}`, requestForm)

    return await response.json()
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
  deleteRequest : async (url ,token = null) =>  {

    let requestForm = {     
      method : "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
    }

    if (token != null) {
      requestForm["headers"]["Authorization"] = token
    }

    let response = await fetch(`http://localhost:3000${url}`, requestForm)

    return await response.json()
  },
}