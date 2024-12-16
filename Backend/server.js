const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes.js")
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://akshaykumarnv777:29006oTxs2bdQt1O@cluster0.dntyd.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(()=> {
    console.log("DB Connected");
    
  });

  app.use("/api/user",userRoutes);
   

app.listen(5000,
  console.log("server started")
);