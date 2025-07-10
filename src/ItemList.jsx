import React, { useEffect, useState } from 'react';
import Nav from './Nav';

const ItemList = () => {
    const [products, setProducts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [deleteProductId, setDeleteProductId] = useState(null);

    useEffect(() => {
        fetch("https://nurseryspring.onrender.com/data")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error(err));
    }, []);

    const displayData = (product) => {
        setCurrentProduct(product);
        setShowForm(true);
    };

    const deleteData = (id) => {
        setDeleteProductId(id);
        setShowDeleteAlert(true);
    };

    const cancelDelete = () => {
        setDeleteProductId(null);
        setShowDeleteAlert(false);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2 p-0 border">
                    <Nav />
                </div>
                <div className="col-10 p-0 ">
                    <table className='table table-responsive table-striped'>
                        <thead>
                            <tr>
                                <th>ProductId</th>
                                <th>ProductImage</th>
                                <th>ProductName</th>
                                <th>ProductCategery</th>
                                <th>ProductPrice</th>
                                <th colSpan="2">Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.productId}>
                                    <td>{product.productId}</td>
                                    <td><img src={product.productImg} width="50px" alt="" /></td>
                                    <td>{product.productName}</td>
                                    <td>{product.productCategery}</td>
                                    <td>{product.productprice}</td>
                                    <td><button className='button_btn' onClick={() => displayData(product)}>Update</button></td>
                                    <td><button className='btn_button' onClick={() => deleteData(product.productId)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {showDeleteAlert && (
                <div className='cover'>
                    <div className="alert">
                        <h2>Confirmation Request</h2>
                        <p>Are you sure you want to delete {deleteProductId}?</p>
                        <form action="https://nurseryspring.onrender.com/delete" method="post">
                            <input type="hidden" name="PId" value={deleteProductId} />
                            <input type="submit" value="OK" />
                        </form>
                        <span className='cancleform' onClick={cancelDelete}><i className="fa-solid fa-xmark"></i></span>
                    </div>
                </div>
            )}

            {showForm && currentProduct && (
                <div className='cover'>
                    <div className="updateform">
                        <h2>Update Product</h2>
                        <form action="https://nurseryspring.onrender.com/update" method="post">
                            <div className="row">
                                <div className="col-6 mt-2">
                                    <label>ProductId:</label>
                                    <input type="number" name="ProductId" defaultValue={currentProduct.productId} required />
                                </div>
                                <div className="col-6 mt-2">
                                    <label>ProductImage:</label>
                                    <input type="text" name="ProductImg" defaultValue={currentProduct.productImg} required />
                                </div>
                                <div className="col-6 mt-2">
                                    <div>
                                        <label>ProductName:</label>
                                        <input type="text" name="ProductName" defaultValue={currentProduct.productName} required />
                                    </div>
                                    <div>
                                        <label>ProductPrice:</label>
                                        <input type="text" name="ProductPrice" defaultValue={currentProduct.productprice} required />
                                    </div>
                                    <div>
                                        <label>ProductCategery:</label>
                                        <select name="ProductCategery" defaultValue={currentProduct.productCategery}>
                                            <option value="Gardening">Gardening</option>
                                            <option value="Plants">Plants</option>
                                            <option value="Bubls">Bubls</option>
                                            <option value="Pots">Pots</option>
                                            <option value="Seeds">Seeds</option>
                                            <option value="Fertilizer">Fertilizer</option>
                                            <option value="Accessories">Accessories</option>
                                        </select>
                                    </div>

                                </div>
                                <div className="col-6 mt-2">
                                    <label>ProductDescription:</label>
                                    <textarea name="ProductDescription" id="ProductDescription" cols="50" rows="7" defaultValue={currentProduct.productDescription}></textarea>
                                </div>
                                <div className="col-6 mt-2">
                                    <input type="submit" value="Save" />
                                </div>
                            </div>
                        </form>
                        <span className='cancleform' onClick={() => setShowForm(false)}><i className="fa-solid fa-xmark"></i></span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemList;
