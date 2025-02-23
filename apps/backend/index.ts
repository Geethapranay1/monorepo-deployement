import express from "express";
import { client } from "@repo/db/client";
import { use } from "react";

const app = express();

app.use(express.urlencoded({extended: true}))



app.get("/", async (req, res) => {
    const user = await client.user.findMany();

    res.json({
        user
    })
})

app.post("/signup", async (req, res) => {
    const {username, password} = req.body;

    if(!username || !password) res.status(400).json({msg: "username and password required"});

    const user = await client.user.create({
        data: {
            username,
            password
        }
    })

    res.json({
        userid: user.id
    })

})

app.listen(3001, () => {
    console.log("Server is running on port 3001")
})