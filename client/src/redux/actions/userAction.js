import  axios  from "axios";
import * as Types from "./types";

export const registerUser=(data)=>async(dispatch)=>{
  try {
    const res = await 
    axios.post('http://localhost:6000/user/addUser',data)
    dispatch({
        type: Types.Register,
        payload: res.data,
    });
    console.log(res.data)
  } catch (error) {
      dispatch({
          type:Types.Register_fail,
          payload:error.message ? error.message : error.response.data.errors
      });
  }
};


export const Login=(data)=>async(dispatch)=>{
  try {
    const res = await 
    axios.post('http://localhost:6000/user/signin',data)
    dispatch({
        type: Types.Login,
        payload: res.data,
    });
    console.log(res.data)
  } catch (error) {
      dispatch({
          type:Types.Login_fail,
          payload:error.message ? error.message : error.response.data.errors
      });
  }
};

export const logout=()=>async(dispatch)=>{
  try {
    dispatch({type:Types.Logout})
  } catch (error) {
      console.log(error)
  }
};