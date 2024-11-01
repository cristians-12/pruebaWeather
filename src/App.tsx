import useFetch from './hooks/useFetch'
import NavBar from './components/NavBar';
import useClientData from './hooks/useClientData';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataHeroLocation from './components/DataHeroLocation';
import CurveSvg from './components/figures/CurveSvg';
import MapComponent from './components/MapComponent';
import { useEffect } from 'react';

const App = () => {

  const { fetchData, dataFetch } = useFetch();
  const { handleSearch, locationSearch, resetSearch } = useClientData();

  useEffect(() => {

  }, [dataFetch])

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <NavBar props={{ handleSearch, fetchData, locationSearch, resetSearch }} />
      <div className='lg:flex lg:w-[95%] lg:h-[60%]'>
        <DataHeroLocation dataFetch={dataFetch} />
        {dataFetch?.current ? <MapComponent lat={dataFetch.location.lat} lon={dataFetch.location.lon} city={dataFetch.location.name} /> : <div className='flex justify-center items-center w-[50%]'><p>No hay un mapa para mostrar.</p></div>}
      </div>
      <ToastContainer />
      <CurveSvg />
    </div>
  )
}

export default App