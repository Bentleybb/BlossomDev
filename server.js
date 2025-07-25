import config from "./config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";
<<<<<<< HEAD

mongoose.Promise = global.Promise;

mongoose
  .connect(config.mongoUri, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
=======
mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUri, {
    //useNewUrlParser: true,
    //useCreateIndex: true,
    //useUnifiedTopology: true
>>>>>>> a2af5e548c88d9c7b9f97c32c6cb3190ab6ee1d9
  })
  .then(() => {
    console.log("Connected to the database!");
  });
<<<<<<< HEAD

mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to User application." });
});

=======
mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});
app.get("/", (req, res) => {
  res.json({ message: "Welcome to User application." });
});
>>>>>>> a2af5e548c88d9c7b9f97c32c6cb3190ab6ee1d9
app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
