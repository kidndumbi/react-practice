import { createStore } from 'redux';
import { vasReducer } from '../reducers/vas';
import { addVas, removeVas, updateVas } from '../actions/vas';

const vasStore = createStore(vasReducer);

console.log('vas state::: ', vasStore.getState());

setTimeout(() => {
    const returned1984 = vasStore.dispatch(addVas({
        companySiteId: 1984,
        storeName: 'Promgirl',
        vasType: 'ASN'
    }));

    const returned9920 = vasStore.dispatch(addVas({
        companySiteId: 9920,
        storeName: 'Tom Ford',
        vasType: 'ASN'
    }));

    console.log('returned: ', returned9920);

    // delete 9920
    vasStore.dispatch(removeVas(returned9920.vas.id))

    // update 1984
    vasStore.dispatch(updateVas({
        id: returned1984.vas.id,
        storeName: 'Pink Elephant'
    }))


}, 3000)



vasStore.subscribe(() => {
    console.log('updated vas::: ', vasStore.getState())
})
