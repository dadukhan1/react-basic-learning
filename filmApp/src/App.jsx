import {useEffect} from 'react'

const apiUrl = 'http://omdbapi.com?apikey=a07d18f5';

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`)
    const data = await response.json();

    console.log(data.searchMovies);
  }

  useEffect(()=>{
    searchMovies("IronMan")
  },[])

  return (
    <div>App</div>
  )
}

export default App 