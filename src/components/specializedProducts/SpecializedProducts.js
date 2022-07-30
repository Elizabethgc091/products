import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";


function SpecializedProducts() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3001/products")
            .then(response => response.json())
            .then(data => {
                setProducts(data.products)
            })
    }, []);

    function createProduct(){
        navigate("/create");
    }
    return(
        <div>
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
    )
}
export default SpecializedProducts;