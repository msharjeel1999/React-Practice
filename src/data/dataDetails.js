import nodejs from '../../src/pictures/nodejs.png';
import css from '../../src/pictures/css.png';
import reactjs from '../../src/pictures/reactjs.png';
import html from '../../src/pictures/html.png';

const dataDetails = [
    {
        id: 1,
        isChannelVerified: true,
        videoThumbnail: nodejs,
        videoTitle: "Node JS tutorials",
        videoViews: "200K",
        videoUploaded: "1 month"
    },

    {
        id: 2,
        isChannelVerified: false,
        videoThumbnail: css,
        videoTitle: "CSS tutorials",
        videoViews: "116K",
        videoUploaded: "8 months"
    },

    {
        id: 3,
        isChannelVerified: true,
        videoThumbnail: reactjs,
        videoTitle: "React JS tutorials",
        videoViews: "1.1M",
        videoUploaded: "2 years"
    },

    {
        id: 4,
        isChannelVerified: false,
        videoThumbnail: html,
        videoTitle: "HTML 5 tutorials",
        videoViews: "30K",
        videoUploaded: "2 days"
    }

];

export default dataDetails;