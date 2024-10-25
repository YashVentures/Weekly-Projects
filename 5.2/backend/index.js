const express =require("express");
const { createTodo, updateTodo } = require("./type");
const { Todo } = require("./db");

const  app = express()

app.use  (express.json())

app.post("/todo" , async  function(req , res){
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if(!parsePayload.success){
    res.status(411).json({
        msg : "you sent the wrong input"
    })
    return;
  }
  await Todo.create({
    title: createPayload.title,
    description : createPayload.description,
    completed:false
   })

   res.json({
    msg: "todo created"
   })
})

app.get("/todos" , async function(req , res){
   const todos = await Todo.find({})
   res.json({
    todos
   })
})

app.put("/completed " , async function (req , res){
    const createPayload = req.body;
    const parsePayload = updateTodo.safeParse(createPayload);
    if(!parsePayload.success){
      res.status(411).json({
          msg : "you sent the wrong input"
      })
      return;
    }
    await Todo.update({
      _id:req.body.id
    },{
      completed : true
    })
    res.json ({
      msg:"todo marked as completed"
    })
})

app.listen(3000);