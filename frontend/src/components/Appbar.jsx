import "../styles/Appbar.css";

export default function Appbar() {
    return (
        <header className="appbar"> 
            <div className="appbar-first-div" >
                <h1 className="">Short URL</h1>
                <nav className="flex items-center">
                    
                <ul className="ul-class">
                        <li><a href="/" className="">Home</a></li>
                        <li><a href="/about" className="">About</a></li>
                        <li><a href="/contact" className="">Contact</a></li>
                        <li><a href="/login" className="">Login</a></li>
                        <li><a href="/signup" className="">Sign Up</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
