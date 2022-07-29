import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SpecializedProducts from '../src/components/specializedProducts/SpecializedProducts'
import CreateProduct from '../src/components/createProduct/CreateProduct'
function App() {

  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="/" element={<SpecializedProducts />}></Route>
                  <Route path="/create" element={<CreateProduct/>}></Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
