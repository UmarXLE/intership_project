import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/base/header/Header';
import Footer from '../../components/base/footer/Footer';

const MainLayout = () => {
    return (
        <main>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
            <Footer />
        </main>
    );
};

export default MainLayout;