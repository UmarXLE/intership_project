import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from '../pages/product-detail/ProductDetail';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={
                <Suspense fallback={<div>Loading...</div>}>
                      <ProductDetail/>
                </Suspense>
            } />
        </Routes>
    );
};

export default AllRoutes;