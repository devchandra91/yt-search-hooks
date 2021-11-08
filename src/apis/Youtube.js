import axios from "axios";

const KEY = "AIzaSyAEsbFm4q_Ui8Nku7th5UA4V5TR3wjwWoo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
