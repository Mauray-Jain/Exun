const express = require("express");
const fetch = require("node-fetch");

const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    const date = Number(process.argv[2]);
    const month = Number(process.argv[3]);
    fetch(`https://history.muffinlabs.com/date/${month}/${date}`)
        .then(response => response.json())
        .then(facts => {
            let html = `<!DOCTYPE html>
<html lang="en">
            
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Today in History</title>
        <style>
            ${fs.readFileSync(path.join(__dirname, "style.css"), "utf-8")}
        </style>
    </head>
            
    <body>
        <div class="content">
        <h3 id="event">Events that Happened on ${facts.date}</h3>\n`;
            facts.data.Events.forEach(
                (element) =>
                    (html += `\t<p class="events"><span class="year">${element.year}</span> - <span class="text">${element.text}</span></p>\n`)
            );
            html += `<h3 id="birth">Births that Happened on ${facts.date}</h3>\n`;
            facts.data.Births.forEach(
                (element) =>
                    (html += `\t<p class="births"><span class="year">${element.year}</span> - <span class="text">${element.text}</span></p>\n`)
            );
            html += `<h3 id="death">Deaths that Happened on ${facts.date}</h3>\n`;
            facts.data.Deaths.forEach(
                (element) =>
                    (html += `\t<p class="deaths"><span class="year">${element.year}</span> - <span class="text">${element.text}</span></p>\n`)
            );
            html += `</div></body></html>`;
            res.send(html);
        });
});

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));