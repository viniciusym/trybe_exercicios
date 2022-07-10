const api = require("./app");

api.listen(process.env.PORT, () => {
  console.log(`listening port ${process.env.PORT}`)
})