
import axios from "axios";
import { publicRequest, userRequest } from "../requestMethods";
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux"


export const getProducts = async (dispatch) =>{
    dispatch(getProductStart());
    try{
        const res = await publicRequest.get("/products");
        dispatch(getProductSuccess(res.data));
    } catch(err){
        dispatch(getProductFailure());
    }
};
export const deleteProduct = async (id, dispatch) =>{
    dispatch(deleteProductStart());
    try{
        const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    } catch(err){
        dispatch(deleteProductFailure());
    }
};
export const updateProducts = async (product, id, dispatch) =>{
    dispatch(updateProductStart());
    try{
        const res = await userRequest.put(`/products/${id}`);
        dispatch(updateProductSuccess({id, product}));
    } catch(err){
        dispatch(updateProductFailure());
    }
};
export const addProducts = async (product, dispatch) =>{
    dispatch(addProductStart());
    try{
        const res = await userRequest.post(`/products`, product);
        dispatch(addProductSuccess(res.data));
    } catch(err){
        dispatch(addProductFailure());
    }
};