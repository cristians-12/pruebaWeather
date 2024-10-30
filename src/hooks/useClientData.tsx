import { useState } from "react"


const useClientData = () => {

    const [locationSearch, setLocationSearch] = useState<string | null>(null);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocationSearch(e.target.value)
    }


    return (
        {
            locationSearch,
            handleSearch
        }
    )
}

export default useClientData