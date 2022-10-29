module.exports = {
  server: "http://54.180.114.129:3000",
  testServer : "http://54.180.114.129:3000",
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

    let response = await fetch(`http://54.180.114.129:3000${url}`, requestForm)

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

    let response = await fetch(`http://54.180.114.129:3000${url}`, requestForm)

    return await response.json()
  },
  patchRequest : async (url ,body,token = null) =>  {
    const response = await fetch(`http://54.180.114.129:3000${url}`, {     
      method : "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : token
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

    let response = await fetch(`http://54.180.114.129:3000${url}`, requestForm)

    return await response.json()
  },
  ages : [
    {label:"18", value:18 },
    {label:"19", value:19 },
    {label:"20", value:20 },
    {label:"21", value:21 },
    {label:"22", value:22 },
    {label:"23", value:23 },
    {label:"24", value:24 },
    {label:"25", value:25 },
    {label:"26", value:26 },
    {label:"27", value:27 },
    {label:"28", value:28 },
    {label:"29", value:29 },
    {label:"30", value:30 },
    {label:"31", value:31 },
    {label:"32", value:32 },
    {label:"33", value:33 },
    {label:"34", value:34 },
    {label:"35", value:35 },
    {label:"36", value:36 },
    {label:"37", value:37 },
    {label:"38", value:38 },
    {label:"39", value:39 },
    {label:"40", value:40 }]
}