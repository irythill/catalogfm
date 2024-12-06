import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages
import Home from './pages/Home';
import AddBand from './pages/AddBand';
import UpdateBand from './pages/UpdateBand'
import DeleteBand from './pages/DeleteBand'
// components
import Layout from './components/Layout';
import BandList from './components/BandList'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bands' element={<BandList />} />
          <Route path='/add-band' element={<AddBand />} />
          <Route path='/edit-band/:id' element={<UpdateBand />} />
          <Route path='/delete-band/:id' element={<DeleteBand />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;