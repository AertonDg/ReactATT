import { useState } from 'react'
import './App.css'
import Submit from './Submit'
import Button from './Button'
import icon from './icon/icon-star.svg'

const App = () => {
  return (
    <>
      <section>
        <button className='boxImg'>
          <img className='img' src={icon} alt="" />
        </button>
        <h1 className='title'>How did we do?</h1>
        <p className='parag'>Please let us we did with your support request. All feedbacks is appreciated to help us improve our offering!</p>
        <div className='boxBtn'>
          <Button Button="" />
        </div>
        <div className='boxSubmit'>
          <Submit Submit="Submit" />
        </div>

      </section>
    </>
  )
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
