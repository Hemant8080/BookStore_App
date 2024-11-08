import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./route/book.route.js";
import cors from "cors";
import useroute from "./route/user.route.js";

const app = express();
dotenv.config();
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 4000;
const URI = process.env.MongodbURI;

//connect to mongodb
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to mongoDB");
} catch (error) {
  console.log("Error: ", error);
}

//defining route
app.use("/book", router);
app.use("/user" , useroute)

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
