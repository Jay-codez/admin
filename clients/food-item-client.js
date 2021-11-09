
const axios = require("axios");


const baseUrl = "http://localhost:3000/food-item"

const addFoodIem = async (req,res) => {

    const body = req.body;

    const results = await axios.post(`${baseUrl}/api/new`,body);

    return results;
}


module.exports = {
addFoodIem
}