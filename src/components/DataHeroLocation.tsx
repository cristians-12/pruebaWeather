import React from 'react'
import { WeatherDataResponse } from '../types/types'

const DataHeroLocation: React.FC<{ dataFetch?: WeatherDataResponse }> = ({ dataFetch }) => {

    return (
        <section className='bg-[rgba(114,158,216,0.5)] p-5 rounded-2xl backdrop-blur-sm'>
            {dataFetch ? (
                dataFetch.error ? (
                    <p className='text-red-700 font-bold'>Error! No se encontró una ciudad con ese nombre.</p>
                ) : (
                    <div className='lg:flex gap-20'>
                        <div className='flex flex-col'>
                            <h2><span className='font-bold'>Nombre de la ciudad:</span> {dataFetch.location.name}</h2>
                            <p>Ubicación: {dataFetch.location.region}, {dataFetch.location.country}</p>
                            <p>Fecha y hora local: {dataFetch.location.localtime}</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p>Temperatura actual: {dataFetch.current.temp_c}°C</p>
                            <p>Velocidad del viento: {dataFetch.current.wind_kph} km/h</p>
                            <figure>
                                <img src={dataFetch.current.condition.icon} alt={`Ícono del clima: ${dataFetch.current.condition.text}`} />

                            </figure>
                        </div>
                    </div>
                )
            ) : (
                <p>No hay información de una ciudad que mostrar.</p>
            )}
        </section>
    )
}

export default DataHeroLocation;
