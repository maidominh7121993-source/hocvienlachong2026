const express = require("express");
const app = express();

app.get("/", (req, res) => {
res.send("<h1>Website đã chạy 🚀</h1>");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log("Server running"));
