import { useState } from 'react'


import './App.css'
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryNews from './components/CountryNews';
import TopHeadlines from './components/TopHeadlines';
import News from './components/News';



 export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <div className="w-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/top-headlines/:category" element={<TopHeadlines />} />
          <Route path="/country/:iso" element={<CountryNews />} />
        </Routes> 
          
      </BrowserRouter>
    </div>
        </>
  )
}

export default App;