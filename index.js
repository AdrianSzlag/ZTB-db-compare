const express = require("express")
const cors = require("cors")
const mongoRouter = require("./mongodb/router").mongoRouter
const postgresRouter = require("./postgresql/router").postgresRouter

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const port = 5000

app.use("/api/mongo", mongoRouter);
app.use("/api/postgres", postgresRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
