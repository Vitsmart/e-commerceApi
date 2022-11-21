import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmZlZGE1MzY4NmRkY2UzMWUyNjg3OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODUzNjY1NywiZXhwIjoxNjY4Nzk1ODU3fQ.rVBpkk1WkCTH4NbGAhv7ocTelmN0wdVnjzVGT2y7vjI"

  // JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
  //   .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});