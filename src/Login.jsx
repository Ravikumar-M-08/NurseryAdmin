import { useState } from "react";

function Login() {
    const username = "ravi";
    const userpass = "ravi@08";

    const [formData, setData] = useState({ name: '', password: '', });
    const [error, setError] = useState(null);

    const valueChange = (e) => {
        setData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username == formData.name && userpass == formData.password) {
            window.location.href = "https://nurseryadmin.netlify.app/itemlist"
        }
        else {
            setError("Username and Password Not Match");
        }
        // console.log(formData);
    }





    return (
        <>
            <div className="form_container">
                <div className="form_content">
                    <h3 className="text-center">Please Login to Continue..</h3><br />
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <p>{error}</p>
                        <div className="input_section">
                            <input type="text" name="name" onChange={valueChange} required />
                            <span>User Name</span>
                        </div>
                        <div className="input_section ">
                            <input type="password" name="password" onChange={valueChange} required />
                            <span>Password</span>
                        </div><br />
                        <button type="submit" >submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login;
