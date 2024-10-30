import { useState } from 'react'
import { WeatherDataResponse } from '../types/types';
import useToastClient from './useToast';

const useFetch = () => {
    const apiUrl = import.meta.env.VITE_URL;
    const { notify } = useToastClient();

    const [dataFetch, setDataFetch] = useState<WeatherDataResponse>();

    const fetchData = async (location: string) => {
        if (location == '' || location == null) {
            notify('Debes ingresar una ciudad')
        } else {
            const response = await fetch(`${apiUrl}&q=${location}&aqi=no`);
            const data = await response.json();
            console.log(data);
            setDataFetch(data);
        }

    }

    return (
        {
            dataFetch,
            fetchData
        }
    )
}

export default useFetch