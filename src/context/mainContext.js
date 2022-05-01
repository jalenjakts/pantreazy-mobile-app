import createDataContext from "./createDataContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import pantreazyApi from "../api/pantreazyApi";
import * as RootNavigation from "../RootNavigation";

// Reducer runs the set actions using the type attribute
const mainReducer = (state, action) => {
    switch (action.type) {
        case "scan_barcode":
            return { ...state, response: action.payload };
        case "save_pantry_item":
            return { ...state }
        default:
            return state;
    }
}

const scan_barcode = (dispatch) => async ({ data }) => {
    try {
        const response = await pantreazyApi.get(`/foods/getFood/${data}`);
        dispatch({ type: 'scan_barcode', payload: response.data })
        RootNavigation.navigate('ScanDetail');
    } catch (err) {
        console.log(err);
    }
}

const save_pantry_item = (dispatch) => async ({ barcode, quantity }) => {
    try {
        const token = await AsyncStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }

        console.log(barcode, quantity);

        const response = await pantreazyApi.post("/foods/addPantryItem", { barcode, quantity }, { headers: headers });

        console.log(response.data.message);

        dispatch({ type: 'save_pantry_item' })
        RootNavigation.navigate('Home');
    } catch (err) {
        console.log(err);
    }
}

export const { Provider, Context } = createDataContext(
    mainReducer,
    { scan_barcode, save_pantry_item },
    { token: null, errorMessage: "", response: null }
)