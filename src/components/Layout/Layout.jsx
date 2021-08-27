import React from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

const Layout = ({ children, hideHeader, hideFooter }) => {
    return(
        <div className="contenedor--layout">
            {!hideHeader && <Header />}
            { children }
            {!hideFooter && <Footer />}
        </div>
    )
}

Layout.defaultProps = {
    hideHeader: false,
    hideFooter: false
}

export { Layout }