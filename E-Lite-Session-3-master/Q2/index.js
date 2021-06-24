const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended : false}));

app.get("/number", (req, res) => {
    res.status(200).send(`Go to ${req.protocol}://${req.get("host")}/number/:num to check if :num is odd or even`);
});
app.get("/number/:num", (req, res) => {
    let num = Number(req.params.num);
    if (num % 2 === 0) {
        res.status(200).send(`The number ${num} is even.`); 
    } else {
        res.status(200).send(`The number ${num} is odd.`);  
    }
});


app.listen(PORT, () => console.log(`Server started on https://localhost:${PORT}`));