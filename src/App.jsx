import { BrowserRouter } from 'react-router-dom';
import { Hero, Navbar, About, Contact, Experience, Feedbacks, Tech, Works, StarsCanvas } from './components';
import Counter from './components/Counter';
const App = () => {
   return (
      <BrowserRouter>
         <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat ">
               <Navbar />
               <Hero></Hero>
            </div>
            <About></About>
            {/* <Experience></Experience> */}
            <Tech></Tech>
            <Works></Works>
            {/* <Feedbacks></Feedbacks> */}
            <div className="relative z-0">
               <Contact></Contact>
               <StarsCanvas></StarsCanvas>
            </div>
         </div>
      </BrowserRouter>
   )
}

export default App
