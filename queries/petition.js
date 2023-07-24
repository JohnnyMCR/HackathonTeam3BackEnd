const db = require('../db/dbConfig');

const getAllPetitioners = async () => {
    try {
        const allPetitioners = await db.any("SELECT * FROM petitioners");
        return allPetitioners;
    } catch (error) {
        return error;
    }
};

const createPetitioner = async (petitionerToAdd) => {
    try {
        const newPetitioner = await db.one("INSERT INTO petitioners (name, address, phone, email) VALUES ($1, $2, $3, $4) RETURNING *", [petitionerToAdd.name, petitionerToAdd.address, petitionerToAdd.phone, petitionerToAdd.email]);
        return newPetitioner;
    } catch (error) {
        return error;
    }
};
module.exports = {
    getAllPetitioners,
    createPetitioner
}