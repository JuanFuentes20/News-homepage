import React, { useEffect } from 'react';

function MainNews() {

    useEffect(() => {
        // This code will run after the component has mounted
        const image = document.querySelector('.main-image');
        if (window.matchMedia('(max-width: 645px)').matches) {
            image.src = "./assets/images/image-web-3-mobile.jpg";
        } else {
            image.src = "./assets/images/image-web-3-desktop.jpg";
        }
    }, []);

    return (
        <div className="main-new-content">
            <img className="main-image" alt="News imgage" src = "./assets/images/image-web-3-desktop.jpg"></img>
            <div className="news-info">
                <h1>The Bright Future of Web 3.0?</h1>
                <div className="additional-information">
                    <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <button>READ MORE</button>
                </div>

            </div>
        </div>
    )
}

export default MainNews;