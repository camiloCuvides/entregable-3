import { useEffect, useState, useRef } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import LocationInfo from './components/LocationInfo'
import getRandomNumber from './utils/getRandomNumber'
import ResidentCard from './components/ResidentCard'

function App() {
  const [ inputValue, setInputValue] = useState(getRandomNumber(126))

  const url = `https://rickandmortyapi.com/api/location/${inputValue || 'undefined'}`
  const [ location, getLocation, hasError, isLoading ] = useFetch(url)

  useEffect(() => {
   getLocation()
  }, [inputValue])

  // console.log(location)
  
  const inputSearch = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    setInputValue(inputSearch.current.value.trim());
  };


  return (
   <div className='cuerpo'>
    <form className='busqueda' onSubmit={handleSubmit}>
        <input className='busqueda1' ref={inputSearch} type="text" />
        <button className='busqueda2'>Search</button>
    </form>
    <aside className='cuerpo_completo'>
      {
        isLoading
        ?  <h2 className='pantalla_carga'>Loading...</h2>
        : (
            hasError
          ? <h2>❌ Hey! you must provide an id from 1 to 126 😭</h2>
          :(
            <>
            <LocationInfo 
              location={location}
            />
            <div className='cuerpo_cartas'>
              {
                location?.residents.map(url => (
                  <ResidentCard 
                    key={url}
                    url={url}
                  />
                ))
              }
            </div>
          </>
          )
        )
        
      }
    </aside>
    </div>
  )
}

export default App
