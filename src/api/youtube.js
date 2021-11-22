import axios from "axios";

const KEY = "AIzaSyCoc-P1MjiRwTNmDHibACkRb-_dXQZnYmY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
