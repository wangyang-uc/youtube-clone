import axios from  'axios';

const KEY = 'AIzaSyBhV3g7u8R4ma_QrOLGs0QsYGuPAi8udmo';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        key:`${KEY}`,
        type:'video'
    }
})