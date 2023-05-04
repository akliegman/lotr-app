import axios from "axios";

export const api = axios.create({
  baseURL: "https://the-one-api.dev/v2/",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
});
