fetch("https:localhost:5000/upload", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({ name: "Capitain Anonymous" }),
})
  .then((res) => {
    if (res.ok) {
      console.log("HTTP request successful")
    } else {
      console.log("HTTP request unsuccessful")
    }
    return res
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
