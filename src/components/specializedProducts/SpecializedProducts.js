import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import chevron from '../../images/chevron.svg'
import funnel from '../../images/funnel.svg'
import styleProducts from './styleProducts.css'


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
        <div className='container-fluid container-products'>
            <div className="d-flex">
                <div className="p-2 flex-grow-1">
                    <p className="fs-2">
                        <i className="color-purple bi bi-chevron-left"></i>
                        Productos especializados</p>
                </div>
                <div className="p-2">
                    <select className="select-form" aria-label="Default select example">
                        <option selected>
                          Cargas masivas
                        </option>
                    </select>
                </div>
                <div className="p-2">
                    <button type="button" className="btn-cargar" onClick={createProduct}> + Cargar
                        producto
                    </button>
                </div>
            </div>
            <div className="d-flex align-items-center">
                <div className="p-2 ">No. items:</div>
                <div className="p-2">
                    <select className="form-select" aria-label="Default select example" disabled>
                        <option selected>10</option>
                    </select>
                </div>
                <div className="p-2 flex-grow-1">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder=" Busca por SKU"
                               aria-label="Search"/>
                    </form>
                </div>
                <div className="p-2">
                    <select className="select-gst" aria-label="Default select example">
                        <option selected>
                           Gestionar columnas
                        </option>
                    </select>
                </div>

                <div className="p-2">
                    <img src={funnel} alt="filtrar"/>
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
                    let date = product.created_at;
                    date =  new Date().toLocaleDateString('es-MX')
                    return (<tr key={key}>
                        <td>{product.product_name}</td>
                        <td>{product.simple_sku.toUpperCase()}</td>
                        <td>{product.sku.toUpperCase()}</td>
                        <td>{product.upc}</td>
                        <td>{product.price}</td>
                        <td>{date}</td>
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
            <div className="d-flex mb-2">
                <div className="me-auto p-2">
                    <p className='text-secondary'>Mostrando 1 de 10 de 100 resultados</p>
                </div>
                <div className="p-2">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    )
}

export default SpecializedProducts;