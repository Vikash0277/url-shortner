const express = require("express");
const cors = require("cors");
const { connectToMongoDB } = require('./connect');
const urlRoute = require('./routes/url')
const app = express();
const PORT = process.env.PORT || 8001;
const URL = require("./models/url")

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb+srv://prasadvikash742:prasadvikash742@cluster0.wc7jxyy.mongodb.net/urlshortner?retryWrites=true&w=majority';

connectToMongoDB(DATABASE_URL)
    .then(
        console.log('mongodb connected')
    );


app.use(cors()); 
    
app.use(express.json());
app.use("/url", urlRoute);
app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        },
        { new: true }
    );

    if (!entry) {
        return res.status(404).send("Short URL not found");
    }

    res.redirect(entry.redirectURL);
});


app.listen(PORT, () => console.log(`server started ar PORT:${PORT}`));