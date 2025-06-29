import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-20 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[88px]  -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}

export default App
