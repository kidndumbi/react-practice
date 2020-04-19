import { v1 as uuid1 } from 'uuid';
import { VasModel } from '../../models/vas';
import { AnyAction } from 'redux';
import { ENUM_VAS_REDUCER } from '../../enums/enum-vas-reducer';

const addVas = ({ companySiteId, storeName, vasType }: VasModel): AnyAction => {
    return {
        type: ENUM_VAS_REDUCER.ADD_VAS,
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
        type: ENUM_VAS_REDUCER.REMOVE_VAS,
        vas: {
            id
        }
    }
}

const updateVas = (vas: VasModel): AnyAction => {
  return {
      type: ENUM_VAS_REDUCER.UPDATE_VAS,
      vas
  }
}

export { addVas, removeVas, updateVas }