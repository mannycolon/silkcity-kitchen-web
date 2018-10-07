import Header from '../Header'
import Footer from '../Footer'

import './Layout.styles.scss'

const Layout = (props) => (
  <div className="layout-container">
    <Header/>
    <div className="layout-content">
      {props.children}
    </div>
    <Footer/>
  </div>
)

export default Layout
