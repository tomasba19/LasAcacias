const app = require('./app')
const PORT = process.env.PORT || 3001
const SERVER_HOST = process.env.SERVER_HOST

app.listen(PORT, SERVER_HOST, () => {
    console.log(`Server is running on port ${PORT}`)
  })