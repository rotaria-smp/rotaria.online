import {Navigation} from './components/Navigation'
import {Hero} from './components/Hero'
import {About} from './components/About'
import {Staff} from './components/Staff'
import {Seasons} from './components/Seasons'
import {Footer} from './components/Footer'
function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <main className="min-h-screen bg-gray-100">
        <About />
        <Seasons />
        <Staff />
      </main>
      <Footer />
    </>
  );
}

export default App;
