
import { publicRequest, userRequest } from "../requestMethods";
import { deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess } from "./productRedux"


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