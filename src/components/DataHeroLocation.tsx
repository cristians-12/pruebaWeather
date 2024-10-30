import React from 'react'
import { WeatherDataResponse } from '../types/types'

const DataHeroLocation: React.FC<{ dataFetch: WeatherDataResponse }> = ({ dataFetch }) => {
    return (
        <section className='bg-slate-800 p-5 rounded-2xl'>
            {
                dataFetch ?
                    (<>
                        <div className='flex flex-col'>
                            <span>
                                Nombre de la ciudad: {dataFetch.location.name}
                            </span>
                            <span>
                                Ubicacion: {dataFetch.location.region}, {dataFetch.location.country}
                            </span>
                            <span>Fecha y hora local: {dataFetch.location.localtime}</span>
                        </div>
                    </>) :
                    (
                        <>
                            No hay informacion que mostrar.
                        </>
                    )
            }
        </section>
    )
}

export default DataHeroLocation