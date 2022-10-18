const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const user = require("./routes/user");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());

mongoose.connect(process.env.MONGOURL, { 
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(()=>console.log("database connected successfully"))
    .catch((err)=>console.log(err.message));

app.use("/api", user);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
