import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'
import Meta from './Meta'
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <div className={styles.main}>
          <Header />
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout
