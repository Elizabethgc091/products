import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import chevron from '../../images/chevron.svg'


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

    function createProduct() {
        navigate("/create");
    }

    function deleteItem(productId) {
        Swal.fire({
            title: '¿Deseas eliminar el producto?',
            text: "Eliminar un producto es una acción permanente y no podrás recuperar el producto eliminado.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            let URL = `http://localhost:3001/products/${productId}`;
            if (result.isConfirmed) {
                fetch(URL, {method: 'DELETE'})
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error(`Error! status: ${response.status}`);
                        }
                        return response.json()
                    })
                    .then(data => {
                        Swal.fire(
                            'Éxito!',
                            'El producto ha sido eliminado correctamente.',
                            'success'
                        )
                    })
                    .catch(err => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Error al eliminar producto!',
                        })
                    })
                setProducts(products.filter((item) => item.upc !== productId))
                console.log(products)
            }
        })
    }

    return (
        <div>

            <div className="d-flex">
                <div className="p-2 flex-grow-1">
                    <p className="fs-2">
                        <i className="color-purple bi bi-chevron-left"></i>
                        Productos especializados</p>
                </div>

                <div className="p-2">
                    <button type="button" className="btn btn-primary btn-lg">Acciones masivas</button>
                </div>
                <div className="p-2">
                    <button type="button" className="btn btn-secondary btn-lg" onClick={createProduct}> + Cargar
                        producto
                    </button>
                </div>
            </div>
            <div className="d-flex align-items-center">
                <div className="p-2 ">No. items: </div>
                <div className="p-2">
                    <select className="form-select" aria-label="Default select example" disabled>
                        <option selected>10</option>
                    </select>
                </div>
                <div className="p-2 flex-grow-1">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder=" Busca por SKU" aria-label="Search"/>
                    </form>
                </div>
                <div className="p-2">
                    <button className="btn btn-outline-success" type="submit">
                        <i className="bi bi-layout-text-sidebar-reverse"></i>
                        Gestionar columnas</button>
                </div>


                <div className="p-2">
                    <i className="bi bi-funnel"></i>
                </div>
            </div>
            <table className='table'>
                <thead className='table-bkg'>
                <tr className='color-purple'>
                    <th scope='col'>NOMBRE DEL PRODUCTO
                        <img src={chevron} alt="expand"/>
                    </th>
                    <th scope='col'>SKU SIMPLE <img src={chevron} alt="expand"/></th>
                    <th scope='col'>SKU <img src={chevron} alt="expand"/></th>
                    <th scope='col'>UPC <img src={chevron} alt="expand"/></th>
                    <th scope='col'>PRECIO <img src={chevron} alt="expand"/></th>
                    <th scope='col'>FECHA DE CARGA <img src={chevron} alt="expand"/></th>
                    <th scope='col'>ESTADO <img src={chevron} alt="expand"/></th>
                </tr>
                </thead>
                <tbody>
                {products.map((product, key) => {
                    return (<tr key={key}>
                        <td>{product.product_name}</td>
                        <td>{product.simple_sku}</td>
                        <td>{product.sku}</td>
                        <td>{product.upc}</td>
                        <td>{product.price}</td>
                        <td>{product.created_at}</td>
                        <td>
                            {product.enable === "true" ? <span className="badge text-bg-success">Publicado</span> :
                                <span
                                    className="badge text-bg-warning">Publicado</span>}
                        </td>
                        <td>
                            <div className="btn-group dropstart">
                                <button type="button" className="btn btn-secondary dropdown-toggle"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-three-dots-vertical"></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"><i className="bi bi-eye"></i> Ver Detalle</a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item text-danger" href="#"
                                           onClick={() => deleteItem(product.upc)}><i
                                        className="bi bi-x-lg"></i> Eliminar Producto</a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>)
                })}
                </tbody>
            </table>
        </div>
    )
}

export default SpecializedProducts;