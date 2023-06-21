import axios from "axios";
import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ReactNode, useEffect, useMemo, useReducer } from "react";
import Toast from "react-native-toast-message";

import { AuthContext } from "./AuthContext";

import {
  IAction,
  ISignInProps,
  ISignUpProps,
  IState,
} from "./interfaces/IAuthProvider";

const showToast = () => {
  Toast.show({
    type: "error",
    text1: "Something went wrong...",
    text2: "Check your inputs.",
  });
};

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isLoggedIn: true,
        authToken: action.authToken,
      };
    case "SIGN_OUT":
      return {
        ...state,
        isLoggedIn: false,
        authToken: null,
      };
    case "RESTORED_TOKEN":
      return {
        ...state,
        isLoadingInitial: false,
        isLoggedIn: true,
        authToken: action.authToken,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "LOADED":
      return {
        ...state,
        isLoadingInitial: false,
        isLoading: false,
      };
  }
};

export const AuthProvider = (props: { children: ReactNode }) => {
  const { children } = props;

  const [state, dispatch] = useReducer(reducer, {
    isLoadingInitial: true,
    isLoading: false,
    isLoggedIn: false,
    authToken: null,
  });

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      try {
        const authToken = await getItemAsync("authToken");

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        if (!!authToken) dispatch({ type: "RESTORED_TOKEN", authToken });
        dispatch({ type: "LOADED" });
      } catch (e) {
        console.log("Error with getting authToken from SecureStore", e);
        showToast();
      }
    };

    bootstrapAsync();
  }, []);

  const actions = useMemo(
    () => ({
      signIn: async (data: ISignInProps) => {
        dispatch({ type: "LOADING" });
        // Send email, password to server and get a token, and handle errors if sign in failed
        axios
          .post("https://lunch-buds-backend.vercel.app/api/users/login", data)
          .then(async (response) => {
            const authToken = "Test";
            dispatch({ type: "SIGN_IN", authToken });

            // Set the token in SecureStore
            await setItemAsync("authToken", authToken);
            console.log(response.data);
            await AsyncStorage.setItem(
              "profile",
              JSON.stringify(response.data.user)
            );
            dispatch({ type: "LOADED" });
          })
          .catch((error) => {
            console.error(error);
            showToast();
            dispatch({ type: "LOADED" });
          });
      },

      signUp: (data: ISignUpProps) => {
        dispatch({ type: "LOADING" });
        // Send sign up data to server and get a token, also handle errors if sign up failed

        axios
          .post("https://lunch-buds-backend.vercel.app/api/users/signup", data)
          .then(async (response) => {
            const authToken = "Test";
            if (response.data.status === 200)
              dispatch({ type: "SIGN_IN", authToken });
            else showToast();

            console.log(data);
            // Set the token in SecureStore
            await setItemAsync("authToken", authToken);
            dispatch({ type: "LOADED" });
          })
          .catch((error) => {
            console.error(error);
            showToast();
            dispatch({ type: "LOADED" });
          });
      },

      signOut: async () => {
        dispatch({ type: "LOADING" });
        dispatch({ type: "SIGN_OUT" });

        // Set the token in SecureStore
        await deleteItemAsync("authToken");
        dispatch({ type: "LOADED" });
      },
    }),
    []
  );
  return (
    <AuthContext.Provider value={{ ...state, ...actions }}>
      {children}
    </AuthContext.Provider>
  );
};
