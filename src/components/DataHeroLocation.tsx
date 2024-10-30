import React from 'react'
import { WeatherDataResponse } from '../types/types'

const DataHeroLocation: React.FC<{ dataFetch: WeatherDataResponse }> = ({ dataFetch }) => {
    return (
        <div>
            {
                dataFetch ?
                    (<>
                        Hay datos
                    </>) :
                    (
                        <>
                        No hay info
                        </>
                    )
            }
        </div>
    )
}

export default DataHeroLocation