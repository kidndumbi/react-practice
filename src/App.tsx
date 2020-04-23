import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux'
import './App.css';

import './redux-files/store/store';

import { addVas, removeVas, updateVas, fetchVasAsync } from './redux-files/actions/vas';

import VasList from './VasList';
import { VasModel } from './models/vas';

 
function App(props: any) {


  console.log('the props::: ', props);
  // const _vasStore = vasStore();

  const companySiteIdRef = useRef<HTMLInputElement | null>(null);
  const storeNameref = useRef<any>(null);
  const vasTypeRef = useRef<any>(null)

  useEffect(() => {

    props.fetchVasAsync();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const submitData = () => {
    const companySiteId = companySiteIdRef.current ? parseInt(companySiteIdRef.current.value  ) : 0;
    const storeName = storeNameref.current.value;
    const vasType = storeNameref.current.value;

    const payload = { companySiteId, storeName, vasType };

    props.addVas(payload);
  }

  return (
      <div className="App">
        <h1>VAS HOME</h1>
        <div>
          <input ref={companySiteIdRef} type="text" placeholder="companySiteId"></input>
          <input ref={storeNameref} type="text" placeholder="storename"></input>
          <input ref={vasTypeRef} type="text" placeholder="vas type"></input>
          <button onClick={submitData} type="button">SUBMIT</button>
        </div>
        <VasList ></VasList>
      </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
      vas: state.vas,
      filters: state.filters
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
      addVas: (payload: VasModel) => {dispatch(addVas(payload))},
      fetchVasAsync: () => {dispatch(fetchVasAsync())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
