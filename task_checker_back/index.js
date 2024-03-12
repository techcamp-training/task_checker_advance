const express = require("express")
const app = express();

// タスクの読み取り処理
app.get("/tasks", async(req, res) => {
  try {
  const AllTasks = await prisma.task.findMany();
  res.json(AllTasks)
  } catch(error) {
  console.log(error)
  }
})

// ジャンルの読み取り処理
app.get("/genres", async(req, res) => {
  try {
  const AllGenres = await prisma.genre.findMany();
  res.json(AllGenres)
  } catch(error) {
  console.log(error)
  }
})

// サーバー起動処理
app.listen(3000, () => {
  console.log("listening on localhost 3000")
})  