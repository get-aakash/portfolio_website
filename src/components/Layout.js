import React from 'react'
import DarkMode from './DarkMode'
import Footer from './Footer'
import Header from './Header'
import Scroll from './Scroll'


export default function Layout({ children }) {
    return (
        <div>
            <DarkMode />

            <div className="wrapper">
                {/* <!-- header section --> */}

                <Header />
                {children}
                {/* <!-- footer section --> */}

                <Footer />

                {/* <!-- Scroll Button --> */}

                <Scroll />

            </div>

        </div>

    )
}
