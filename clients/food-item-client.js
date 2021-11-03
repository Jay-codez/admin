
const axios = require("axios");


const baseUrl = "http://localhost:3000/food-item"

const addFoodIem = async (req,res) => {

    const body = req.body;

    console.log(body)

    const results = await axios.post("/api/new",body);

    console.log(results.response)

    return results.response;
}




module.exports = {
addFoodIem
}