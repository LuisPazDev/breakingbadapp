import { useState, useEffect } from "react";

export const useFetch = ( url ) => {

  const [ state, setState ] = useState( {
    loading: true,
    error: null,
    data: null,
    
  })

  const getFetch = async () => {

    setState({
      ...state,
      loading: true,
    })

    const resp = await fetch( url );
    const data = await resp.json();

    setState({
      data: data,
      loading: false,
      error: null,
  })

};

  useEffect(() => {
    getFetch();
  }, [ url ])

  return {
    data: state.data,
    loading: state.loading,
    error: state.error
  }

};
