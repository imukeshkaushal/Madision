import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// Lazy load route components
const Home = lazy(() => import('../Pages/Home'));
const Contact = lazy(() => import('../Pages/Contact'));
const Listing = lazy(() => import('../Pages/Listing'));
const ArmorVehileRental = lazy(() => import('../Pages/ArmorVehileRental'));
const Motorcade = lazy(() => import('../Pages/Motorcade'));
const Preowned = lazy(() => import('../Pages/Preowned'));
const ProductDetail = lazy(() => import('../Pages/ProductDetail'));

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/cars"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Listing />
            </Suspense>
          }
        />
        <Route
          path="/cars/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProductDetail />
            </Suspense>
          }
        />
        <Route
          path="/armor-vehile-rentals"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ArmorVehileRental />
            </Suspense>
          }
        />
        <Route
        path="/motorcade-services"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Motorcade/>
          </Suspense>
        }
      />
      <Route
        path="/preowned-vehicle-inventory"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Preowned/>
          </Suspense>
        }
      />
      </Routes>
    </div>
  );
};

export default AllRoutes;
