import { v1 as uuid1 } from 'uuid';
import { VasModel } from '../../models/vas';
import { AnyAction } from 'redux';
import { ENUM_VAS_ACTION } from '../../enums/enum-vas-actions';

const addVas = ({ companySiteId, storeName, vasType }: VasModel): AnyAction => {
    return {
        type: ENUM_VAS_ACTION.ADD_VAS,
        vas: {
            id: uuid1(),
            companySiteId,
            storeName,
            vasType
        }
    }
}

const removeVas = (id: string): AnyAction => {
    return {
        type: ENUM_VAS_ACTION.REMOVE_VAS,
        vas: {
            id
        }
    }
}

const updateVas = (vas: VasModel): AnyAction => {
    return {
        type: ENUM_VAS_ACTION.UPDATE_VAS,
        vas
    }
}

const fetchVas = (payload: VasModel[]) => {
    return {
        type: ENUM_VAS_ACTION.FETCH_VAS,
        payload
    }
}

const fetchVasAsync = () => {
    return (dispatch: any) => {
        setTimeout(() => {

            dispatch(fetchVas(
                [{
                    id: 'dhdierjxd',
                    companySiteId: 1984,
                    storeName: 'Promgirl',
                    vasType: 'ASN'
                },
                {
                    id: 'ddj0elelel',
                    companySiteId: 9920,
                    storeName: 'Tom Ford',
                    vasType: 'ASN'
                }
                ]
            ));
        });
    };
}



export { addVas, removeVas, updateVas, fetchVasAsync }