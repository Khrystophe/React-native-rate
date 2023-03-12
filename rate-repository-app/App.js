import Main from "./src/components/Main";
import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";

const App = () => {
  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
};
console.log("yo");

export default App;
