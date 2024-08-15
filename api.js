//Today we will create an REST API.
//initialize npm init
//instal express

const express = require('express'); // Firstly, we will require the express

const users = require("./data.json"); // renamed to avoid conflict
const app = express(); // Create an app which stores express
const PORT = 8000; // At what gate our api will run

// Now we will define our routes

app.get("/api/users", (req, res) => {
    return res.json(users);
});

app.get("/users", (req, res) => {
    const html = `
    <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `;
    res.send(html);
});

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id); // Use 'users' instead of 'user'
    return res.json(user);
});

app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
