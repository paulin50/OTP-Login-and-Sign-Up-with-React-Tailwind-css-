// index.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const authRoutes = require("./routes/auth");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/api/auth", authRoutes);
// const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
