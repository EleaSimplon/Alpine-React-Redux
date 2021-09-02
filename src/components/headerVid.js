import React from 'react';

const HeaderVid = () => {

    return (
        <header>
    
            <div class="overlay"></div>

            <video width="100%" controls autoplay preload="auto" muted loop>
                <source type="video/mp4" src="headervid.mp4"/>
            </video>


        </header>
    )
}

export default HeaderVid;