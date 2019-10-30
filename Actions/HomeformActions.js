import axios from "axios";
import { GET_HOME_FORM_DETAILS } from '../constants/actionconstants';


export function GET_HOME_FORM_DETAILS_SUCCESS(payload){
    return { type: GET_HOME_FORM_DETAILS, payload }
    }


export function GET_FORM_DETAILS(){
    return(dispatch) =>{
        return axios.get("https://reactnative-8b51f.firebaseio.com/userProfile.json").then(response =>{
            dispatch(GET_HOME_FORM_DETAILS_SUCCESS(response.data))
        }).catch(error =>{

        });
    }
}