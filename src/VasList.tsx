import React from 'react'
import { VasModel } from './models/vas';
import { removeVas } from './redux-files/actions/vas';
import { connect } from 'react-redux';

function VasList(props: any) {

    const deleteVas = (id: string = '') => {
        props.removeVas(id);
    }

    return (
        <ul>
            <li>The list</li>
            {
                props.vas && props.vas.length > 0
                    ?
                    props.vas.map((v: VasModel) => {
                        return <li onClick={() => { deleteVas(v.id) }} key={v.id}>{v.companySiteId}</li>
                    })
                    :
                    <li>NO DATA</li>
            }
        </ul>
    )
}

const mapStateToProps = (state: any) => {
    return {
        vas: state.vas,
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        removeVas: (id: string) => {dispatch(removeVas(id))},
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(VasList);
