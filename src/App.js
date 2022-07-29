import './App.css';
import {useEffect, useState} from "react";
import { Navigate } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);

    useEffect(() => {
       fetch("https://mocki.io/v1/85c8d4d5-62dc-4246-9781-91ada1ff926d")
           .then(response => response.json())
           .then(data => {
               setProducts(data.products)
           })
    }, []);

    function createProduct(){
        alert("create product")
    }

  return (
    <div className="App">
        <div className='container'>
            <div className="d-flex">
                <div className="p-2 flex-grow-1">
                    <p className="fs-2">Productos especializados</p>
                </div>
                <div className="p-2">
                    <button type="button" className="btn btn-primary btn-lg">Acciones masivas</button>
                </div>
                <div className="p-2">
                    <button type="button" className="btn btn-secondary btn-lg" onClick={createProduct}> + Cargar producto</button>
                </div>
            </div>



            <table className='table'>
                <thead>
                <tr>
                    <th scope='col'>NOMBRE DEL PRODUCTO</th>
                    <th scope='col'>SKU SIMPLE</th>
                    <th scope='col'>SKU</th>
                    <th scope='col'>UPC</th>
                    <th scope='col'>PRECIO</th>
                    <th scope='col'>FECHA DE CARGA</th>
                    <th scope='col'>ESTADO</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product,key)=>{
                    return (<tr key={key}>
                        <td>{product.product_name}</td>
                        <td>{product.simple_sku}</td>
                        <td>{product.sku}</td>
                        <td>{product.upc}</td>
                        <td>{product.price}</td>
                        <td>{product.created_at}</td>
                        <td>{product.enable}</td>
                    </tr>)
                })}
                </tbody>
            </table>
        </div>

    </div>
  );
}

export default App;
