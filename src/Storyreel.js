import React from 'react';
import './Storyreel.css';
import Story from './Story';

const Storyreel = () => {
    return (
        <div className="storyReel">
            <Story 
            image="https://i.insider.com/5ea883b54bca63397d43b1d4?width=1100&format=jpeg&auto=webp" 
            profileSrc="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455" 
            title="jeff Bezos"/>
            <Story 
            image="https://m.economictimes.com/thumb/msid-78033938,width-1200,height-900,resizemode-4,imgsize-112650/mukesh-ambani-ap.jpg" 
            profileSrc="https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg" 
            title="Elon Musk"/>
            <Story 
            image="https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg" 
            profileSrc="https://m.economictimes.com/thumb/msid-78033938,width-1200,height-900,resizemode-4,imgsize-112650/mukesh-ambani-ap.jpg" 
            title="Mukesh Ambani"/>
            <Story 
            image="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455" 
            profileSrc="https://i.insider.com/5ea883b54bca63397d43b1d4?width=1100&format=jpeg&auto=webp" 
            title="Warren Buffet"/>
            <Story 
            image="https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg" 
            profileSrc="https://m.economictimes.com/thumb/msid-78033938,width-1200,height-900,resizemode-4,imgsize-112650/mukesh-ambani-ap.jpg" 
            title="Mukesh Ambani"/>
        </div>
    )
}

export default Storyreel;