import { NavigationContainer } from "@react-navigation/native";
import axios from "axios";
import { Navigation } from "./src/navigation/Navigation";
axios.defaults.baseURL = "https://api.themoviedb.org/3/movie";
axios.defaults.params = {
  api_key: "7808bbd5dba02b8c92b0ec0db25d5180",
  language: "es-ES",
};

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
