function Navbar() {

    const displayMenu = () => {
        const menu = document.querySelector(".hamburger-navbar-links")
        const hamburger = document.querySelector(".hamburger")
        hamburger.classList.toggle("active")
        menu.classList.toggle("active")
    }

    return (
        <div className="navbar-container">
            <div className="navbar">
                <h1>W.</h1>
                <div className="navbar-links">
                    <ul>
                        <li>Home</li>
                        <li>New</li>
                        <li>Popular</li>
                        <li>Trending</li>
                        <li>Categories</li>
                    </ul>
                </div>
                <div className="hamburger" onClick={displayMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="hamburger-navbar-links">
                    <ul>
                        <li>Home</li>
                        <li>New</li>
                        <li>Popular</li>
                        <li>Trending</li>
                        <li>Categories</li>
                    </ul>
            </div>
        </div>
    )
}

export default Navbar