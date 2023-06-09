import { userTypes } from "./user.types";

export const signInSuccess = (user:any) => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const googleSignInStart = () => ({
  type: userTypes.GOOGLE_SIGN_IN_START,
});

export const facebookSignInStart = () => ({
  type: userTypes.FACEBOOK_SIGN_IN_START,
});

export const signOutUserStart = () => ({
  type: userTypes.SIGN_OUT_USER_START,
});

export const signOutUserSuccess = () => ({
  type: userTypes.SIGN_OUT_USER_SUCCESS,
});

export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION,
});


export const emailSignInStart = (userCredentials: {email:string, password:string}) => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: userCredentials,
});