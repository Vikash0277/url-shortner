const express = require("express");

const { connectToMongoDB } = require('./connect');
const urlRoute = require('./routes/url')
const app = express();
const PORT = process.env.PORT || 8001;
const URL = require("./models/url")

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/short-url'

connectToMongoDB(DATABASE_URL)
    .then(
        console.log('mongodb connected')
    );

app.use(express.json());
app.use("/url", urlRoute);
app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    await URL.findone({
        shortId
    },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        }
    );
    res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`server started ar PORT:${PORT}`));