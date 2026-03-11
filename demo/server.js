var express = require("express");
var cors = require("cors");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: '*' }));
const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));
app.get("/", (req, res, next) => {
    res.send(' \
        \
        \
    \
    \
        \
        \
        \
        ');
});
app.get("/json", async (req, res, next) => {
    const time = Math.floor(Math.random() * 1000) + 1000;
    let square = req.query.value || 0;
    square *= square;
    await sleep(time);
    res.json({
        'time': time,
        'square': square
    });
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
})