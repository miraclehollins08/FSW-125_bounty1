const express = require('express')
const StarwarsTvShow = express.Router()
const uuid = require("uuid/v4")

// middleware //
StarwarsTvShow.use(express.json())

// fake database //
const StarWaries = [
    { title:"Darth Vader", Living:"False", Bounty_Amount:"$100,000,000", Type:"Sith", _id: uuid() },
    { title:"Luke Skywaler", Living:"True", Bounty_Amount:"$900,000.000", Type:"Jedi", _id: uuid()},
    { title:"Master Yoda", Living:"True", Bounty_Amount:"$800,000.000", Type:"Jedi", _id: uuid() }
]


// Routes //
StarwarsTvShow.get("/StarWaries", (req, res) => {
    res.send(StarWaries)
})

StarwarsTvShow.post("/StarWaries", (req, res) => {
    const newStarWaries = req.body
    StarWaries.push(newStarWaries)
    res.send("Successfully added ${newStarWaries.title} to the database!")
})

module.exports = StarwarsTvShow