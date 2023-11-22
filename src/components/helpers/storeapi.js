import { apiHelper } from "./apihelper";
import { storeUrl } from "../constants/constants";

export const storeApi = ()=>{
    const api = apiHelper();

    const login = (name,pword)=>{
        return api.postApi(`${storeUrl}/auth/login`,{
            body :{
                username :name,
                password :pword
            }
        })
    };

    const create =(name,mail,pword)=>{
        return api.postApi(`${storeUrl}/users/add`,{
            body:{
                username :name,
                email:mail,
                password:pword
            }
        })
    };

    const getAllProducts =()=>{
        return api.getApi(`${storeUrl}/products?limit=99`)
    }

    const getCategoryProducts =(category)=>{
        return api.getApi(`${storeUrl}/product/category/${category}`)
    }
    
    return {
        login,
        create,
        getAllProducts,
        getCategoryProducts
    }
}