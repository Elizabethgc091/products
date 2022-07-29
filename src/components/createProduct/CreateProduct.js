import React from "react";
function CreateProduct() {
    return(
        <div>
            <p>Cargar producto</p>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Nombre de producto</label>
                    <input type="text" className="form-control" id="formGroupExampleInput"
                           placeholder="Escribe el nombre del producto"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">SKU simple</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2"
                           placeholder="Escribe el sku simple del producto"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Sku</label>
                    <input type="text" className="form-control" id="formGroupExampleInput"
                           placeholder="Escribe el sku del producto"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">UPC</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2"
                           placeholder="Escribe el código UPC del producto"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Precio del producto</label>
                    <input type="text" className="form-control" id="formGroupExampleInput"
                           placeholder="Asigna un precio al producto"/>
                </div>
                <label htmlFor="formGroupExampleInput" className="form-label">Estado</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Selecciona un estado para el producto</option>
                    <option value="1">Publicado</option>
                    <option value="2">Pendiente</option>
                    <option value="3">Retrasado</option>
                </select>
                <div className="d-flex mb-3">
                    <div className="me-auto p-2">
                        <button type="button" className="btn btn-outline-danger">Cancelar</button>
                    </div>
                    <div className="p-2">
                        <button type="button" className="btn btn-outline-primary">Guardar y Salir</button>
                    </div>
                    <div className="p-2">
                        <button type="button" className="btn btn-outline-primary">+ Cargar producto</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CreateProduct;