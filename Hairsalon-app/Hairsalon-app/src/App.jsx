import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import DatePicker from './components/DatePicker';

function App() {

  return (
    <>
      <main>

        <Header />
        <Hero/>
        <About/>
        <Services/>
        <DatePicker/>
        <Footer/>
        <FloatingButton/>
      </main>
    </>
  )
}

export default App
