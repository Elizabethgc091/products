import React, {useEffect, useState} from "react";

function CreateProduct() {
    const variblesTemporal = {
        simple_sku: "",
        sku: "",
        upc: "",
        product_name: "",
        price: "",
        enable: ""
    }
    const [values, setValues] = useState(variblesTemporal);
    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(variblesTemporal)
        };
        fetch("http://localhost:3001/products", requestOptions)
            .then(response => response.json())
            .then(data => {
                //console.log(data.message)
            })
    }, []);
    function handleInputChange(e) {
     const {name, value} = e.target;
     setValues({...values, [name]:value})
    }

    function handlerSubmit(e){
        e.preventDefault();
        console.log(values)
        e.target.reset();
    }
    return(
        <div>
            <p>Cargar producto</p>
            <form className="container" onSubmit={handlerSubmit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Nombre de producto</label>
                    <input type="text" className="form-control" id="formGroupExampleInput"
                           placeholder="Escribe el nombre del producto" name="product_name" onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">SKU simple</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2"
                           placeholder="Escribe el sku simple del producto" name="simple_sku" onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Sku</label>
                    <input type="text" className="form-control" id="formGroupExampleInput"
                           placeholder="Escribe el sku del producto" name="sku" onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">UPC</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2"
                           placeholder="Escribe el código UPC del producto" name="upc" onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Precio del producto</label>
                    <input type="text" className="form-control" id="formGroupExampleInput"
                           placeholder="Asigna un precio al producto" name="price" onChange={handleInputChange}/>
                </div>
                <label htmlFor="formGroupExampleInput" className="form-label">Estado</label>
                <select className="form-select" aria-label="Default select example" name="enable" onChange={handleInputChange}>
                    <option selected>Selecciona un estado para el producto</option>
                    <option value="true">Publicado</option>
                    <option value="false">Pendiente</option>
                    <option value="false">Retrasado</option>
                </select>
                <div className="d-flex mb-3">
                    <div className="me-auto p-2">
                        <button type="button" className="btn btn-outline-danger">Cancelar</button>
                    </div>
                    <div className="p-2">
                        <button type="button" className="btn btn-outline-primary">Guardar y Salir</button>
                    </div>
                    <div className="p-2">
                        <button type="submit" className="btn btn-outline-primary" >+ Cargar producto</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateProduct;