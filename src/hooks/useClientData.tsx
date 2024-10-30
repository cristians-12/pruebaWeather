import { useState } from "react"


const useClientData = () => {

    const [locationSearch, setLocationSearch] = useState<string | null>(null);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocationSearch(e.target.value)
    }

    const resetSearch = ()=>{
        setLocationSearch('')
    }


    return (
        {
            locationSearch,
            handleSearch,
            resetSearch
        }
    )
}

export default useClientData