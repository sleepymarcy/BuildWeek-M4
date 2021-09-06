import { Navbar, Nav, NavDropdown, Form, FormControl, InputGroup } from 'react-bootstrap'
import { Linked, Hicon, Nicon, Jicon, Micon, Bicon, User, Wicon } from '../assets/icons.jsx'
import { FaSearch as Sicon } from 'react-icons/fa'
import '../css/Nav.css'


const MyNav = () => {
    return (

        <Navbar bg="light" expand="lg">
            <div className='nav-wrapper'>
                <Navbar.Brand href="#home"><Linked /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline >
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text className='search'><Sicon /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl className='search' placeholder="Search" />
                        </InputGroup>
                    </Form>

                    <Nav className='nav'>
                        <Nav.Link href="#home" className='link-dropdown' ><Hicon /><span className='text-dropdown'>Home</span></Nav.Link>
                        <Nav.Link href="#network" className='link-dropdown'><Nicon /><span className='text-dropdown'>My Network</span></Nav.Link>
                        <Nav.Link href="#jobs" className='link-dropdown'><Jicon /><span className='text-dropdown'>Jobs</span></Nav.Link>
                        <Nav.Link href="#messaging" className='link-dropdown'><Micon /><span className='text-dropdown'>Messaging</span></Nav.Link>
                        <Nav.Link href="#notifications" className='link-dropdown'><Bicon /><span className='text-dropdown'>Notifications</span></Nav.Link>
                        <User />
                        <Nav.Link href="#profile" className='link-dropdown'><Wicon /><span className='text-dropdown'>Work</span></Nav.Link>
                        <Nav.Link href="#work" className='link-dropdown prem'><span className='text-dropdown premium'>Try Premium for free</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>

    )
}

export default MyNav