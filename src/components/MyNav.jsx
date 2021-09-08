import { Navbar, Nav, NavDropdown, Form, FormControl, InputGroup } from 'react-bootstrap'
import { Linked, Hicon, Nicon, Jicon, Micon, Bicon, User, Wicon } from '../assets/icons.jsx'
import { FaSearch as Sicon } from 'react-icons/fa'
import '../css/Nav.css'
import { useEffect, useState } from 'react'


const MyNav = () => {
     
    const [query , setQuery] = useState('')
    const [profiles, setProfiles ] = useState([])

    const fetchProfiles = async (query) => {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${query}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1ZDgxYTdiZTZjMTAwMTVmOWRiOWEiLCJpYXQiOjE2MzA5MTg2ODMsImV4cCI6MTYzMjEyODI4M30.z1FglsnilVoFG29tlQ4cAsplJJ3_M45A3BGoYeYrQl8",
            },
          }
        );
        let profiles = await response.json();
   
        setProfiles(profiles);
      };
    useEffect(
        () => {
            fetchProfiles(query)
        },[]
    )

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
                            <FormControl value={query} onChange={(e)=>setQuery(e.target.value)}className='search' placeholder="Search" />
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