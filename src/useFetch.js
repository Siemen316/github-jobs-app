import Axios from 'axios';
import { useEffect, useReducer } from 'react';

const initialState = {
  jobs: [],
  isLoading: true,
  error: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'REQUESTED':
      return { ...state, jobs: [], isLoading: true, error: false };

    case 'REQUEST_ACCEPTED':
      return { ...state, jobs: action.payload, isLoading: false, error: false };

    case 'ERROR':
      return {
        ...state,
        jobs: [],
        isLoading: false,
        error: true,
      };

    default:
      return state;
  }
};

const BASE_URL = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json`;

const useFetch = (params) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const cancelToken = Axios.CancelToken.source();
    dispatch({ type: 'REQUESTED' });
    Axios.get(BASE_URL, {
      cancelToken: cancelToken.token,
      params: { markdown: true, ...params },
    })
      .then((res) => {
        dispatch({ type: 'REQUEST_ACCEPTED', payload: res.data });
      })
      .catch((erorr) => {
        dispatch({ type: 'ERROR', payload: erorr });
      });
    return () => {
      cancelToken.cancel();
    };
  }, [params]);

  return state;
};

export default useFetch;
