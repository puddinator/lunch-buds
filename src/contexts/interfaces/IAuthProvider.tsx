export interface IState {
  isLoadingInitial: boolean;
  isLoading: boolean;
  isLoggedIn: boolean;
  authToken?: string | null;
}

export interface IAction {
  type: "RESTORED_TOKEN" | "SIGN_IN" | "SIGN_OUT" | "LOADING" | "LOADED";
  authToken?: string | null;
}

export interface ISignInProps {
  email: string;
  password: string;
}

export interface ISignUpProps extends ISignInProps {
  name: string;
  number: string;
  interests: string[];
}
