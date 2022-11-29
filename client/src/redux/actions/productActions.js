import * as actionTypes from '../constants/productConstant'
import axios from "axios";

export const getProducts = () => async (dispatch) => {

    const URL ='http://localhost:8000';

    try {
       let {data} = await axios.get(`${URL}/products`);
       dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS , payload: data})
    } catch (error) {
        dispatch({type: actionTypes.GET_PRODUCTS_FAIL , payload: error.message})
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_REQUEST});
        let {data} = await axios.get(`${URL}/product/${id}`);
        console.log(data);
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS , payload:data})
    } catch (error) {
        // dispatch({type: actionTypes.GET_PRODUCT_DETAILS_FAIL , payload: error.message})
        alert(error.message)
    }

}

