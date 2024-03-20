import axios from "axios";;
import instance from "./index";

export const getProducts = async () =>{
  try {
    const {data} =await instance.get('/product');
   return data
  } catch (error) {
    console.log(error);
  }
}