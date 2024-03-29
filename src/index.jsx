import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Freelances from './pages/Freelances'
import ProfileContainer from './components/ProfileContainer'
import Results from './pages/Results'
import Header from './components/Header'
import Error from './components/Error'
import Footer from './components/Footer'
import GlobalStyle from './utils/style/GlobalStyle'
import { SurveyProvider, ThemeProvider } from './utils/context'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
        <GlobalStyle/>
        <Header />
      
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/survey/:questionNumber' element={<Survey />} />
            <Route path='/results' element={<Results/>} />
            <Route path='/freelances' element={<Freelances/>} />
            <Route 
    path="/profile/:id" 
    element={<ProfileContainer />} 
/>
            <Route path='*' element={ <Error/>} />
        </Routes>
        <Footer />
        </SurveyProvider>
        </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)