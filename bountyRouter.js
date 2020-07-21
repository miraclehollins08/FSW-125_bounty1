const express = require('express')
const bountyRouter = express.Router()
const uuid = require("uuid/v4")

// middleware //
bountyRouter.use(express.json())

// fake database //
const bounties = [
    { title:"Darth Vader", Living:"False", Bounty_Amount:"$100,000,000", Type:"Sith", _id: uuid() },
    { title:"Luke Skywaler", Living:"True", Bounty_Amount:"$900,000.000", Type:"Jedi", _id: uuid()}
]


// Routes //
bountyRouter.get("/bounties", (req, res) => {
    res.send(bounties)
})

bountyRouter.post("/bounties", (req, res) => {
    const newBounties = req.body
    bounties.push(newBounties)
    res.send("Successfully added ${newBounties.title} to the database!")
})

module.exports = bountyRouter