import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux'
import './App.css';

import './redux-files/store/vas';

import { addVas, removeVas, updateVas } from './redux-files/actions/vas';

import VasList from './VasList';


function App(props: any) {

  // const _vasStore = vasStore();

  const companySiteIdRef = useRef<any>(null);
  const storeNameref = useRef<any>(null);
  const vasTypeRef = useRef<any>(null)

  useEffect(() => {

    props.dispatch(addVas({
      companySiteId: 1984,
      storeName: 'Promgirl',
      vasType: 'ASN'
    }));

    props.dispatch(addVas({
      companySiteId: 9920,
      storeName: 'Tom Ford',
      vasType: 'ASN'
    }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const submitData = () => {
    const companySiteId = companySiteIdRef.current.value;
    const storeName = storeNameref.current.value;
    const vasType = storeNameref.current.value;

    const payload = { companySiteId, storeName, vasType };

    props.dispatch(addVas(payload));
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
        <VasList></VasList>
      </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
      vas: state
  }
}

export default connect(mapStateToProps)(App);
