import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import styleCreateProduct from "../createProduct/styleCreateProduct.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createProduct } from "../../feature/products/productsSlice";

function CreateProduct() {
  const [newProduct, setNewProduct] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  }

  function handlerSubmit(e) {
    e.preventDefault();
    dispatch(createProduct(newProduct));
    e.target.reset();
  }
  return (
    <div>
      <div
        className="p-2 flex-grow-1"
        onClick={() => {
          navigate("/");
        }}
      >
        <p id="text-cp">
          <i className="color-purple bi bi-chevron-left"></i>
          Cargar producto
        </p>
      </div>

      <form className="container" onSubmit={handlerSubmit}>
        <p className="date-products">Datos del producto</p>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label fw-bold">
            Nombre de producto
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Escribe el nombre del producto"
            name="product_name"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="formGroupExampleInput2"
            className="form-label fw-bold"
          >
            SKU simple
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Escribe el sku simple del producto"
            name="simple_sku"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label fw-bold">
            Sku
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Escribe el sku del producto"
            name="sku"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="formGroupExampleInput2"
            className="form-label fw-bold"
          >
            UPC
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Escribe el código UPC del producto"
            name="upc"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label fw-bold">
            Precio del producto
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Asigna un precio al producto"
            name="price"
            onChange={handleInputChange}
          />
        </div>
        <label htmlFor="formGroupExampleInput" className="form-label fw-bold">
          Estado
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          name="enable"
          onChange={handleInputChange}
        >
          <option value>Selecciona un estado para el producto</option>
          <option value="true">Publicado</option>
          <option value="false">Pendiente</option>
          <option value="false">Retrasado</option>
        </select>
        <div className="d-flex mb-3">
          <div className="me-auto p-2">
            <button type="button" className="btn btn-outline-danger">
              Cancelar
            </button>
          </div>
          <div className="p-2">
            <button type="button" className="btn btn-outline-primary" disabled>
              Guardar y Salir
            </button>
          </div>
          <div className="p-2">
            <button type="submit" className="btn btn-outline-primary">
              + Cargar producto
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
