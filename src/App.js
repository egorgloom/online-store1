import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRouter from "./components/AppRouter/AppRouter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from './components/Sidebar/Sidebar';
import { getCategories } from './features/categories/categoriesSlice';




function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getCategories())
  }, [dispatch])
  
  return (
    <div className='app'>
      <Header />
      <div className="container">
        <Sidebar />
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
