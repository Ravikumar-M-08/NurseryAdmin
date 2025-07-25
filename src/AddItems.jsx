import React from 'react'
import Nav from './Nav'

const AddItems = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 p-0">
                        <Nav />
                    </div>
                    <div className="col-lg-10 ">
                <form action="https://nurseryspring.onrender.com/send" method="post">
                    <div className="mt-3">
                        <label>Upload image</label><br/>
                        <input type="text" name="ProductImg" id="ProductImg" placeholder="Paste Image Url"/>
                    </div>
                    <div className="mt-3">
                        <label>Product name</label><br/>
                        <input type="text" placeholder="Type Here" name="ProductName" id="ProductName"/>
                    </div>
                    <div className="mt-3">
                        <label>Product description</label><br/>
                        <textarea name="ProductDescription" id="ProductDescription" cols="50" rows="10" placeholder="Write content here"></textarea>
                    </div>
                    <div className="row mt-3">
                        <div className="categary col-6">
                            <label>Product category </label><br/>
                            <select name="ProductCategery" id="ProductCategery">
                                <option value="Gardening">Gardening</option>
                                <option value="Plants">Plants</option>
                                <option value="Bubls">Bubls</option>
                                <option value="Pots">Pots</option>
                                <option value="Seeds">Seeds</option>
                                <option value="Fertilizer">Fertilizer</option>
                                <option value="Accessories">Accessories</option>
                            </select>
                        </div>
                        <div className="price col-6">
                            <label for="">Product Price</label>
                            <input type="number" name="ProductPrice" id="ProductPrice" />
                        </div>
                    </div>
                    <div className="mt-3">
                        <input type="submit" className="submit-btn" value="ADD"/>
                    </div>
                </form>
                
            </div>
                </div>
            </div>
        </>
    )
}

export default AddItems
