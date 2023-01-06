const Prisma = require('prisma/prisma-client');
const express = require('express');
const cors = require('cors');

const app = express();
const prisma = new Prisma.PrismaClient();

app.use(cors({
  origin: '*',
}));

app.use(express.json())

async function getAllTodoItems() {
  return prisma.todoItems.findMany();
}

app.get("/items", async (req, res) => {
  let items = await getAllTodoItems()

  res.end(JSON.stringify(items))
})

app.post('/addItem', async (req, res) => {
  // let parsedData = JSON.stringify(req.body);
  await prisma.todoItems.create({
    data: req.body,
  })
  res.status(201).end();
})


let port = 4000;
app.listen(port);
