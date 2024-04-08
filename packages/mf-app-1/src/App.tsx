import { useEffect, useState } from 'react'
import { DogsService } from './service/DogsService'
import './App.css'

function App() {
  const [dogs, setDogs] = useState([])
  const [dogBreed, setDogBreed] = useState('')
  
  useEffect(() => {
    async function getDogs() {
      const dogList =  await DogsService.getDogs()
      setDogs(dogList.data?.message)
      console.log(dogList.data?.message)
    }
    getDogs()
  }, [])

  const dogList = Object.keys(dogs)
    .filter((dog: string) => dog.includes(dogBreed))
    .map((dog: string, index: number) => <button key={`dog-${index}`} onClick={() => dispatchParent(dog)}>{dog}</button>)



  function dispatchParent(dog: string) {
    window.parent.postMessage({ dogBreed: dog }, '*')
  }
  return (
    <>
      <div>
       <input type="text" value={dogBreed} onChange={(e) => setDogBreed(e.target.value)} />
      </div>
      <h1>DogList</h1>
      <div className="card">
        {dogList}
      </div>
    </>
  )
}

export default App
