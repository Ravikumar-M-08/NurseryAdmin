import React, { useEffect, useState } from 'react'
import Nav from './Nav'

const Enquiry = () => {
      const [products, setProducts] = useState([]);
    useEffect(() => {
            fetch("http://localhost:8080/enquiry")
                .then(res => res.json())
                .then(data => setProducts(data))
                .catch(err => console.error(err));
        }, []);
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-2 p-0 border">
                <Nav/>
            </div>
            <div className="col-10 p-0">
                <table className='table table-responsive table-striped'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>PhoneNumber</th>
                                <th>Email</th>
                                <th>Subject</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.phoneNumber}</td>
                                    <td>{product.email}</td>
                                    <td>{product.subject}</td>
                                    <td>{product.message}</td>
                                    {/* <td><button className='button_btn' onClick={() => displayData(product)}>Update</button></td>
                                    <td><button className='btn_button' onClick={() => deleteData(product.productId)}>Delete</button></td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </div>
        </div>
    </div>
    </>
  )
}

export default Enquiry
