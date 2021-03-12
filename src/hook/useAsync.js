import { useReducer, useEffect } from 'react';function reducer(state, action) {    switch (action.type) {        case 'LOADING':            return {                isLoading: true,                data: null,                error: false            };        case 'SUCCESS':            return {                isLoading: false,                data: action.data,                error: false            };        case 'ERROR':            return {                isLoading: false,                data: null,                error: action.error            };        default:            throw new Error(`Unhandled action type: ${action.type}`);    }}function useAsync(callback, deps = []) {    const [state, dispatch] = useReducer(reducer, {        isLoading: true,        data: null,        error: false    });    const fetchData = async () => {        dispatch({ type: 'LOADING' });        try {            const data = await callback();            dispatch({ type: 'SUCCESS', data });        } catch (e) {            dispatch({ type: 'ERROR', error: e });        }    };    useEffect(() => {        fetchData();    }, deps);    return [state, fetchData];}export default useAsync;