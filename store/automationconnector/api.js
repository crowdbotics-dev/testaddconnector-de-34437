import axios from "axios"
import {
  AUTOMATIONCONNECTOR_USERNAME,
  AUTOMATIONCONNECTOR_PASSWORD
} from "react-native-dotenv"
const automationconnector = axios.create({
  baseURL: "https://cbtcms.herokuapp.com/case/1045/",
  auth: {
    username: AUTOMATIONCONNECTOR_USERNAME,
    password: AUTOMATIONCONNECTOR_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
