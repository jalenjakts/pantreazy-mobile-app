import createDataContext from "./createDataContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import pantreazyApi from "../api/pantreazyApi";
import * as RootNavigation from "../RootNavigation";

// Reducer runs the set actions functions and distributes the responses from the functions
const mainReducer = (state, action) => {
    switch (action.type) {
        case "scan_barcode":
            return { ...state, response: action.payload };
        case "save_pantry_item":
            return { ...state }
        case "get_pantry":
            return { ...state, response: action.payload }
        default:
            return state;
    }
}

// Retrieves the data of the item that is scanned by the user
const scan_barcode = (dispatch) => async ({ data }) => {
    try {
        const response = await pantreazyApi.get(`/foods/getFood/${data}`);
        dispatch({ type: 'scan_barcode', payload: response.data })
        RootNavigation.navigate('ScanDetail');
    } catch (err) {
        console.log(err);
    }
}

// Saves the item that is scanned by the user into the pantry
const save_pantry_item = (dispatch) => async ({ barcode, quantity }) => {
    try {
        const token = await AsyncStorage.getItem('token');

        const headers = {
            'content-type': 'application/json',
            'authorization': 'Bearer ' + token
        }

        const response = await pantreazyApi.post("/foods/addPantryItem", { barcode, quantity }, { headers: headers });

        // Need to figure out logic to handle the request when an item is already added

        dispatch({ type: 'save_pantry_item' })
        RootNavigation.navigate('Home');
    } catch (err) {
        console.log(err);
    }
}

// Retrieves all the scanned items from the user
const get_pantry = (dispatch) => async () => {
    try {
        const token = await AsyncStorage.getItem('token');

        const headers = {
            'content-type': 'appplication/json',
            'authorization': 'Bearer ' + token
        }

        const response = await pantreazyApi.get("/foods/getPantry", { headers: headers })

        console.log(response.data);

        dispatch({ type: 'get_pantry', payload: response.data })

    } catch (err) {
        console.log(err);
    }
}

export const { Provider, Context } = createDataContext(
    mainReducer,
    { scan_barcode, save_pantry_item, get_pantry },
    { token: null, errorMessage: "", response: null }
)