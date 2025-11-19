import {Navigation} from './components/Navigation'
import {Hero} from './components/Hero'
import {Staff} from './components/Staff'
import {Footer} from './components/Footer'
function App() {
  return (
    <>
      <Navigation />
			<Hero/>
      <main className="min-h-screen bg-gray-100">
        <Staff />
      </main>
      <Footer />
    </>
  );
}

export default App;
