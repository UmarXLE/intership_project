import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/base/header/Header';
import Footer from '../../components/base/footer/Footer';
import styled from "./main.module.scss"

const MainLayout = () => {
    return (
        <>
            <Header />
            <main className={styled.container}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;