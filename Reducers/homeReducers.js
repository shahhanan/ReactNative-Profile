import { GET_HOME_FORM_DETAILS } from "../constants/actionconstants";
import update from "immutability-helper";

const getInitialState = () => ({
    RewiewsData : []
});
const FormDetails = (state = getInitialState(), action ) =>{
    switch(action.type){
        case GET_HOME_FORM_DETAILS: 
        return update(state, {
            RewiewsData : {
                    $set: action.payload
                }
        })
        default:
            return state
    }
}
export default FormDetails;