import React from 'react'
import { WeatherDataResponse } from '../types/types'
import { motion } from "framer-motion";
import { WiDayHaze } from 'react-icons/wi';
import { FaMoon } from 'react-icons/fa';

const DataHeroLocation: React.FC<{ dataFetch?: WeatherDataResponse }> = ({ dataFetch }) => {

    return (
        <motion.section initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 860,
                damping: 50
            }} className='bg-[rgba(120,148,185,0.5)] p-5 rounded-2xl lg:w-[50%] flex flex-col items-center justify-center backdrop-blur-sm overflow-y-scroll lg:overflow-y-auto'>
            {dataFetch ? (
                dataFetch.error ? (
                    <p className='text-red-400 font-bold text-[20px]'>Error! No se encontró una ciudad con ese nombre.</p>
                ) : (
                    <div className='lg:flex gap-20'>

                        <div className='flex flex-col'>

                            <h2><span className='font-bold'>Nombre de la ciudad:</span> {dataFetch.location.name}</h2>
                            <p><span className='font-bold'>Ubicación:</span> {dataFetch.location.region}, {dataFetch.location.country}</p>
                            <p className='mt-3'><span className='font-bold'>Fecha y hora local:</span> {dataFetch.location.localtime}</p>
                            <div className='flex items-center mt-10 justify-center'>
                                {dataFetch.current.is_day === 1 ? <WiDayHaze size={150} color='yellow' /> : <FaMoon size={100} />}
                            </div>
                        </div>
                        <div className='flex flex-col items-ce'>
                            <p className='border-b lg:text-[30px]'><span className='font-bold text-[#00CBA9]'>Temperatura: </span>{dataFetch.current.temp_c}°C</p>
                            <p className='border-b'><span className="font-bold">Velocidad del viento:</span> {dataFetch.current.wind_kph} km/h</p>
                            <p className='border-b'><span className="font-bold">UV:</span> {dataFetch.current.uv}</p>
                            <p><span>Region:</span> {dataFetch.location.tz_id}</p>
                            <figure className='flex justify-center'>
                                <img src={dataFetch.current.condition.icon} className='lg:w-20' alt={`Ícono del clima: ${dataFetch.current.condition.text}`} />
                            </figure>
                        </div>

                    </div>
                )
            ) : (
                <p>No hay información de una ciudad que mostrar.</p>
            )}
        </motion.section>
    )
}

export default DataHeroLocation;
