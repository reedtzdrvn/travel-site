import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header.jsx'
import Home from './pages/Home'
import Cities from './pages/Cities'
import Nature from './pages/Nature'
import RoutesPage from './pages/Routes'
import Tips from './pages/Tips'
import NotFound from './pages/NotFound'


function PageWrapper({ children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>
      {children}
    </motion.div>
  )
}


export default function App() {
  const location = useLocation()
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <AnimatePresence mode="wait" initial={false} exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/cities" element={<PageWrapper><Cities /></PageWrapper>} />
          <Route path="/nature" element={<PageWrapper><Nature /></PageWrapper>} />
          <Route path="/routes" element={<PageWrapper><RoutesPage /></PageWrapper>} />
          <Route path="/tips" element={<PageWrapper><Tips /></PageWrapper>} />
          <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}