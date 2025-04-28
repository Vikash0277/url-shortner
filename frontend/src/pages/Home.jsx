import Appbar from "../components/Appbar"
import Footer from "../components/Footer"
import InputBox from "../components/InputBox"
import { useState } from "react"
import "../styles/Home.css"
import axios from 'axios';

export default function Home() {
    const [url, setUrl] = useState("");
    const [shortedUrl, setShortedUrl] = useState("");
    const [copied, setCopied] = useState(false);
    
    const handlecopy = async ()=>{
        await navigator.clipboard.writeText(`http://localhost:5000/${shortedUrl}`)
        setCopied(true)
        if(copied){
            setTimeout(() => {
                setCopied(false);
            }, 2000)
        }
    }

    const handleShortUrl = async (e) => {
        console.log("url",url)
        e.preventDefault();
        try{
            const response = await axios.post(`http://localhost:8001/url`,{
                url: url
            });
            if(response.status === 200){
                setShortedUrl(response.data.shortId);
                setUrl("");
            }
            else{
                alert("Error in shortening the URL")
            }
        }
        catch(err){
            console.log(err);
            alert("Error in shortening")
        }
    }
    return (
        <div>
            <Appbar />
            <main className="main-content">
                <div className="middle-content">
                    <h2 className="">Shorten Your URL</h2>
                    
                    <InputBox 
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        onPress={handleShortUrl}
                    />
                   <div className="below-input-box">
                        
                        <div className="shorted-url">
                            
                            { shortedUrl && (
                                <div className="shorted-url-inner-div">
                                    <p>{`http://localhost:8001/${shortedUrl}`}</p>
                                </div>
                            )}
                        </div>

                        <button className="copy-button" onClick={handlecopy}>
                            {copied ? "copied": "copy"}
                            
                        </button>
                        
                   </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
