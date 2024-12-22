
import TopBar from './components/TopBar';
import MainNav from './components/MainNav';
import Hero from './components/Hero';
import BusinessTools from './components/BusinessTools';
import SuccessStories from './components/SuccessStories';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <MainNav />
      <main>
        <Hero />
        <BusinessTools />
        <SuccessStories />
      </main>
      <Footer />
    </div>
  );
}

export default App;