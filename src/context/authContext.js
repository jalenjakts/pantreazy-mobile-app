import createDataContext from "./createDataContext";
import AsyncStorage from '@react-native-async-storage/async-storage'
import pantreazyApi from "../api/pantreazyApi";
import * as RootNavigation from "../RootNavigation";

// Reducer runs the set actions using the type attribute
const authReducer = (state, action) => {
    switch (action.type) {
        case "add_error":
            return { ...state, errorMessage: action.payload };
        case "clear_error_message":
            return { ...state, errorMessage: "" };
        case "signup":
            return { ...state }
        case "login":
            return { ...state, token: action.payload }
        case "signout":
            return { ...state, token: null, errorMessage: "" };
        default:
            return state;
    }
}

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: "clear_error_message" });
}

const tryLocalLogin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'login', payload: token });
        RootNavigation.navigate('MainFlow');
    } else {
        dispatch({ type: 'login', payload: null });
        RootNavigation.navigate('Signup');
    }
}

const signup = (dispatch) => async ({ firstName, lastName, email, password, confirmPassword }) => {
    try {
        const response = await pantreazyApi.post('/accounts/register', { title: "Mr", firstName, lastName, email, password, confirmPassword, acceptTerms: true });
        RootNavigation.navigate('Login');
        dispatch({ type: 'signup' });
    } catch (err) {
        dispatch({
            type: "add_error",
            payload: "Something went wrong with sign up. Please try again."
        });
    }
}

const login = (dispatch) => async ({ email, password }) => {
    try {
        const response = await pantreazyApi.post('/accounts/authenticate', { email, password });
        await AsyncStorage.setItem("token", response.data.jwtToken);
        dispatch({ type: 'login', payload: response.data.jwtToken })
        // console.log(response.data.jwtToken);
        RootNavigation.navigate('MainFlow');
    } catch (err) {
        dispatch({
            type: "add_error",
            payload: "Something went wrong with login. Please try again."
        })
    }
}

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    RootNavigation.navigate('AuthFlow');
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, login, clearErrorMessage, tryLocalLogin, signout },
    { token: null, errorMessage: "" }
)