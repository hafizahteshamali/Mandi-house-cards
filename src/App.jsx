import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  )
}

export default App
