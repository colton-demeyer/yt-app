import axios from "axios";

const KEY = "AIzaSyCoc-P1MjiRwTNmDHibACkRb-_dXQZnYmY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet,contentDetails,statistics",
    type: "video",
    maxResults: 5,
    chart: "mostPopular",
    regionCode: "US",
    key: KEY,
  },
});
