import express from "express"

const router = express.Router()

router.get("/", (_req, res) => {
  res.send("fetching diary")
})

router.post("/", (_req, res) => {
  res.send("saving diary")
})

export default router
