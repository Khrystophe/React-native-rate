import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";
import Constants from "expo-constants";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import AppBar from "./AppBar";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/RepositoryList" element={<RepositoryList />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
