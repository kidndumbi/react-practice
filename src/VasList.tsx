import React, { useEffect } from 'react'
import { VasModel } from './models/vas';
import { removeVas, addVas } from './redux-files/actions/vas';
import { connect } from 'react-redux';

function VasList(props: any) {

    useEffect(() => {
        console.log('data changing?? ', props.vas)

    }, [props.vas])

    const deleteVas = (id: string = '') => {
        props.dispatch(removeVas(id))
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
        vas: state
    }
}

export default connect(mapStateToProps)(VasList);
