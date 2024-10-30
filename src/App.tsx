import useFetch from './hooks/useFetch'
import NavBar from './components/NavBar';
import useClientData from './hooks/useClientData';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataHeroLocation from './components/DataHeroLocation';

const App = () => {

  const { fetchData, dataFetch } = useFetch();
  const { handleSearch, locationSearch } = useClientData();


  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <NavBar handleSearch={handleSearch} />
      <button className='w-fit hover:scale-105 bg-emerald-900 hover:bg-emerald-600' onClick={() => fetchData(locationSearch || '')}>Obtener informacion</button>
      <DataHeroLocation dataFetch={dataFetch} />
      <ToastContainer />
    </div>
  )
}

export default App