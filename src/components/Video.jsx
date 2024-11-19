import React from "react";

const Video = () => {
    return(
        <div className="flex justify-center mt-6">
            <iframe 
            // width="800" 
            // height="450"
            style={{ width: "1100px", height: "562px" }}
            src="https://www.youtube.com/embed/Ak4GR9qGi-Y?si=I4Cr-0nZ98WY_lr-" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
            </iframe>
        </div>
    );
};

export default Video;


