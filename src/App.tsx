import { Routes, Route } from 'react-router-dom'
import Hero from '@/components/HeroSection/Hero'


/* Authentication Pages */ 
import Login from '@/Pages/Login'
import Signup from '@/Pages/Signup'


function App() {
  return (
   <>
 
    <Routes>
      <Route path="/" element={<Hero />} />

      {/* Authentication Pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/get-started" element={<Signup />} />
    

    </Routes>
   </>
  )
}

export default App