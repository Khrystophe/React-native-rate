import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  async getAccessToken() {
    try {
      const token = await AsyncStorage.getItem(`${this.namespace}:token`);
      return token ? JSON.parse(token) : null;
    } catch (error) {
      console.error("Error getting access token from storage: ", error);
      return null;
    }
  }

  async setAccessToken(accessToken) {
    try {
      await AsyncStorage.setItem(
        `${this.namespace}:token`,
        JSON.stringify(accessToken)
      );
    } catch (error) {
      console.error("Error setting access token in storage: ", error);
    }
  }

  async removeAccessToken() {
    try {
      await AsyncStorage.removeItem(`${this.namespace}:token`);
    } catch (error) {
      console.error("Error removing access token from storage: ", error);
    }
  }
}

export default AuthStorage;
