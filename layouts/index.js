import React from 'react';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
function index({ children }) {
    return <div>

        <Navigation />
        {children}
        <Footer />
    </div>;
}

export default index;
