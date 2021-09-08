import { Dropdown, Modal } from 'react-bootstrap'
import '../css/Nav.css'
import { useState } from 'react';
import { Wicon } from './icons.jsx'

const User = () => {
    return (
        <div className='dropdown-wrapper'>
            <Dropdown type='button' className='link-dropdown line' variant='none'>
                <img className='img-dropdown' src="https://media-exp1.licdn.com/dms/image/C4D03AQHnI5P4nAH2DQ/profile-displayphoto-shrink_100_100/0/1611150787255?e=1636588800&amp;v=beta&amp;t=S943kSLOPvHQpv9PFnfXenrkvXET6esDDcKPKLSScF0" alt="Martyna Sowińska" />
                <Dropdown.Toggle variant='none' className='text-dropdown toggle-dropdown'>Me</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Divider />
                    <Dropdown.Item className='main-dropdown' href="#action/1">Account</Dropdown.Item>
                    <Dropdown.Item className='secondary-dropdown' href="#action/2">Settings & Privacy</Dropdown.Item>
                    <Dropdown.Item className='secondary-dropdown' href="#action/3">Help</Dropdown.Item>
                    <Dropdown.Item className='secondary-dropdown' href="#action/4">Language</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className='main-dropdown' href="#action/5">Manage</Dropdown.Item>
                    <Dropdown.Item className='secondary-dropdown' href="#action/6">Post & Activity</Dropdown.Item>
                    <Dropdown.Item className='secondary-dropdown' href="#action/7">Job Posting Account</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className='secondary-dropdown' href="#action/8">Sign Out</Dropdown.Item>
                </Dropdown.Menu >
            </Dropdown>
        </div>
    )
}

function WorkModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Dropdown.Toggle variant='none' className='text-dropdown toggle-dropdown' onClick={handleShow}>Work</Dropdown.Toggle>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            </Modal>
        </>
    );
}

const Work = () => {

    return (
        <div className='dropdown-wrapper'>
            <Dropdown type='button' className='link-dropdown' variant='none'>
               <Wicon />
               <WorkModal />
            </Dropdown>
        </div>
    )
}

export { WorkModal, Work, User }