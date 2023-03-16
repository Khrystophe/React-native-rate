import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";
import { useAuthStorage } from "../hooks/useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(AUTHENTICATE);
  const navigate = useNavigate();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { credentials: { username, password } },
    });
    await authStorage.setAccessToken(data.authenticate.accessToken);
    await apolloClient.resetStore();
    navigate("/repositoryList");
  };

  return [signIn, result];
};

export default useSignIn;
