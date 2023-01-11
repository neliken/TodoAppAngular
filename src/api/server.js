const Prisma = require('prisma/prisma-client');
const express = require('express');
const cors = require('cors');

const app = express();
const prisma = new Prisma.PrismaClient();

app.use(cors({
  origin: '*',
}));

app.use(express.json())

app.get("/todo", async (req, res) => {
  let items = await prisma.todoItems.findMany();

  res.end(JSON.stringify(items))
})

app.post('/todo', async (req, res) => {
  let item = req.body;

  const todo = await prisma.todoItems.create({
    data: {
      title: item.title
    },
  })

  res.json({
    todo
  })
})

app.put('/todo/:id', async (req, res) => {
  const item = req.body;

  await prisma.todoItems.update({
    where: {
      id: parseInt(item.id),
    },
    data: {
      isCompleted: item.isCompleted
    }
  })
})

app.delete('/todo/:id',async (req, res) => {
  const id = parseInt(req.params.id);

  await prisma.todoItems.delete({
    where: {
      id: id,
    }
  })
})

app.delete('/todo',async (req, res) => {

  await prisma.todoItems.deleteMany({
    where: {
      isCompleted: true,
    }
  })
})

let port = 4000;
app.listen(port, () => {
  console.log("Application started on port: " + port);
});
