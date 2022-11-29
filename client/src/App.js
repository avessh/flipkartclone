import './App.css';
import Navbar from './components/header/Navbar';

// all css files
// eslint-disable-next-line 
import navStyle from './style/Navbar.css';
// eslint-disable-next-line
import homestyle from './style/Home.css'
// eslint-disable-next-line
import bannerStyle from './style/Banners.css'
// eslint-disable-next-line
import dialogstyle from './style/dialog.css'
import Home from './components/Home/Home';
import DataProvider from './context/dataProvider';

import { BrowserRouter, Routes , Route} from 'react-router-dom'
import DetailView from './components/Details/DetailView';
import Cart from './components/cart/Cart';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar />
        <div style={{ marginTop: '54px' }}>
          <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/product/:id' element={ <DetailView />} />
          <Route exact path='/cart' element={<Cart/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
