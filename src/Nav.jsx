import { Link } from 'react-router-dom'
const Nav = () => {

    return (
        <>
            <div className='admin-section'>
                <div className="content">
                    <Link to="/listitems" className={`nav-link ${location.pathname === '/listitems' ? 'active' : ''}`}
                    ><svg xmlns="http://www.w3.org/2000/svg" height="30px"
                        viewBox="0 -960 960 960" width="30px" fill="#000000">
                            <path
                                d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm278-58L296-440l58-58 84 84 168-168 58 58-226 226Zm-278 58v-480 480Z" />
                        </svg><span>List Items</span>
                    </Link>

                    <Link to="/additems" className={`nav-link ${location.pathname === '/additems' ? 'active' : ''}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px"
                            viewBox="0 -960 960 960" width="30px" fill="#000000">
                            <path
                                d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm278-58L296-440l58-58 84 84 168-168 58 58-226 226Zm-278 58v-480 480Z" />
                        </svg><span>Add Items</span>
                    </Link>

                    <Link to="/enquiry" className={`nav-link ${location.pathname === '/enquiry' ? 'active' : ''}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960"
                            width="30px" fill="#000000">
                            <path
                                d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm278-58L296-440l58-58 84 84 168-168 58 58-226 226Zm-278 58v-480 480Z" />
                        </svg><span>Enquiry</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Nav
