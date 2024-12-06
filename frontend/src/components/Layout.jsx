import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import '../css/Layout.css'

const Layout = ({ children }) => {
  return (
    <div className="home">
      <Header className='header' />
      <main className='main'>
        {children}
      </main>
      <Footer className='footer' />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout