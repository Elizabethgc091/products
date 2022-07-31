import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SpecializedProducts from '../src/components/specializedProducts/SpecializedProducts'
import CreateProduct from '../src/components/createProduct/CreateProduct'

import Logo from './images/Logo.svg'
import home from './images/home.svg'
import box from './images/box.svg'
import bell from './images/bell.svg'
import gear from './images/gear.svg'
import line from './images/line.svg'


function App() {
    return (
        <div className="App">
            <div className='home-container'>
                <nav className='nav-bar'>
                    <div className='nav-bar-icons'>
                        <img src={Logo} alt="logo"/>
                        <img id='icon-home' src={home} alt="home"/>
                        <img src={line} alt="divisor"/>
                        <img id='icon-box' src={box} alt="box"/>
                        <img id='icon-bell' src={bell} alt="notificaciones"/>
                        <img id='icon-gear' src={gear} alt="ajustes"/>
                    </div>
                </nav>
                <div className='header-nav'>
                    <header className='header-container container-fluid'>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">
                                    <img id='icon-home' src={home} alt="home"/>
                                </a></li>
                                <li className="breadcrumb-item"><a href="#">Productos</a></li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Productos especializados
                                    </li>
                            </ol>
                        </nav>
                        <div className='profile-info'>
                            <div>
                                <p id='admin'>Southorn Administrator</p>
                                <p id='user'>Elizabeth</p>
                            </div>
                            <div id='user-picture'>
                                EG
                            </div>
                        </div>
                    </header>
                    <main className='container-fluid'>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<SpecializedProducts/>}></Route>
                                <Route path="/create" element={<CreateProduct/>}></Route>
                            </Routes>
                        </BrowserRouter>
                    </main>
                </div>
            </div>
        </div>

    );
}

export default App;
