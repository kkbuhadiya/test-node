const express = require("express");
const cors = require("cors");
const app = express();

const PORT_NO = 3080;

app.use(express.json());
app.use(cors()); // Add parentheses to initialize CORS middleware

// Define a basic route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT_NO, () => {
  console.log(`Server is running on port no ${PORT_NO}`);
});
