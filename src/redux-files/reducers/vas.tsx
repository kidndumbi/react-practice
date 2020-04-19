import { AnyAction } from 'redux';
import { VasModel } from '../../models/vas';
import { ENUM_VAS_REDUCER } from '../../enums/enum-vas-reducer';

const initState: VasModel[] = [];

const vasReducer = (state = initState, action: AnyAction) => {

    switch (action.type) {
        case ENUM_VAS_REDUCER.ADD_VAS:
            return [...state, action.vas];
        case ENUM_VAS_REDUCER.REMOVE_VAS:
            return state.filter( vas => vas.id !== action.vas.id);
        case ENUM_VAS_REDUCER.UPDATE_VAS:
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