require("dotenv").config();

const express = require("express");
const cors = require("cors");

const apiRoutes = require("./routes/api");
const limiter = require("./middlewares/rateLimit");
const hideServer = require("./middlewares/hideServer");

const app = express();

app.use(cors());
app.use(express.json());

// Security layers
app.use(limiter);
app.use(hideServer);

// Routes
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
    res.json({ status: true, message: "Secure API running 🔒" });
});

app.listen(process.env.PORT, () => {
    console.log("Server started");
});
