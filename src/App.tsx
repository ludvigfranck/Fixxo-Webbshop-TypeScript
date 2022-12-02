import React from 'react';
import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeView from './views/HomeView';
import CategoryView from './views/CategoryView';
import ProductsView from './views/ProductsView';
import ContactsView from './views/ContactsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import LikeView from './views/LikeView';
import ProductProvider from './contexts/ProductContext';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import ProductDetailView from './views/ProductDetailView';
import CreateView from './views/CreateView';
import UpdateView from './views/UpdateView';


const App: React.FC = () => {
  
  return (
    <ProductProvider>
    <ShoppingCartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/category" element={<CategoryView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/products/:id" element={<ProductDetailView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="/create" element={<CreateView />} />
          <Route path="/update" element={<UpdateView />} />
          <Route path="/search" element={<SearchView />} />
          <Route path="/compare" element={<CompareView />} />
          <Route path="/like" element={<LikeView />} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
    </ProductProvider>

  );
}

export default App;