import { AnyAction } from 'redux';
import { VasModel } from '../../models/vas';
import { ENUM_VAS_ACTION } from '../../enums/enum-vas-actions';

const initState: VasModel[] = [];

const vasReducer = (state = initState, action: AnyAction) => {

    switch (action.type) {
        case ENUM_VAS_ACTION.FETCH_VAS:     
            return action.payload
        case ENUM_VAS_ACTION.ADD_VAS:
            return [...state, action.vas];
        case ENUM_VAS_ACTION.REMOVE_VAS:
            return state.filter( vas => vas.id !== action.vas.id);
        case ENUM_VAS_ACTION.UPDATE_VAS:
            return state.map(vas => {
                if(vas.id === action.vas.id){
                   return {
                       ...vas,
                       ...action.vas
                   }
                }
                return vas
            })
        default:
            return state;
    }

};

export { vasReducer };