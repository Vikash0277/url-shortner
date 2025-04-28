const shortid = require("shortid");
const URL=require("../models/url");


async function handleGenerateNewShortUrl(req,res){
    const body= req.body;
    console.log("body url:",body.url)
    console.log("body:",body)
    if(!body){
        return  res.status(400).json({error:"url is required"})
    }
    const shortID=shortid();
    try {
        const newUrl = await URL.create({
            shortId: shortID,
            redirectURL: body.url, 
            visitHistory: []  
        });
        return res.json({ shortId: newUrl.shortId, message: 'URL shortened successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'failed to short the url' });
    }
    
}

async function handleGetAnalytics(req , res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json({ totalClicks : result.visitHistory.length,
        analytics : result.visitHistory,
    })
}

module.exports={
  handleGenerateNewShortUrl,
  handleGetAnalytics,

}