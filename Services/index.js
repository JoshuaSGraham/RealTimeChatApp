// express runs HTTP Server
const express = require("express");
// use cors so we can call the server from other origins
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (request, response) => {
    const { username } = request.body;
    return response.json({ username: username, secret: "sha256..."});
});

app.listen(3001);