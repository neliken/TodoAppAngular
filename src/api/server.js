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

app.post('/todo', async (req, res) => {
  let item = req.body;

  console.log(item);

  const todo = await prisma.todoItems.create({
    data: {
      title: item.title
    },
  })

  res.json({
    todo
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



let port = 4000;
app.listen(port, () => {
  console.log("Application started on port: " + port);
});

/*
add
get
delete

 */
