import express from "express"
import diaryRouter from "./routes/diaries"

const app = express()
app.use(express.json())
const PORT = 3000

// routes

app.get("/ping", (_req, res) => {
  console.log("someone pinged me " + new Date().toLocaleDateString())
  res.send("pong")
})

app.use("/api/diaries", diaryRouter)

// listen port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
