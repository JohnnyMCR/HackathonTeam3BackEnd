const express = require("express");
const petitioners = express.Router();
const { getAllPetitioners, createPetitioner } = require("../queries/petition.js");

petitioners.get("/", async (req, res) => {
    const allPetitioners = await getAllPetitioners();
    if (allPetitioners) {
        return res.status(202).json(allPetitioners);
    } else {
        res.status(500).json({ error: "Server Error" });
    }
})

petitioners.post("/", async (req, res) => {
    const newPetitioner = req.body;
    try {
        const addedPetitioner = await createPetitioner(newPetitioner);
        res.status(200).json(addedPetitioner);
    } catch (error) {
        res.status(400).json({ error: error });
    }
});

module.exports = petitioners;