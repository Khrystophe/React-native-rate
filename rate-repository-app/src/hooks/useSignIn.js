import { useContext } from "react";
import { useMutation, useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { AUTHENTICATE } from "../graphql/mutations";
import { useAuthStorage } from "../hooks/useAuthStorage";
import AuthStorageContext from "../contexts/AuthStorageContext";

const useSignIn = () => {
  // const authStorage = useAuthStorage();
  const authStorage = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(AUTHENTICATE);
  const navigate = useNavigate();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } });
    await authStorage.setAccessToken(data.authenticate.accessToken);
    await apolloClient.resetStore();
    navigate("/repositoryList");
  };

  return [signIn, result];
};

export default useSignIn;
