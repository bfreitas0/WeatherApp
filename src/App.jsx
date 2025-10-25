import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>Weather App</h1>
        <h2>Weather in your city</h2>
        <div>
          <input type="text" name="city" placeholder='Enter your city '/>
          <button className='btn'>Submit</button>
        </div>
      </div>
    </>
  )
}

export default App