import { Dropdown, Modal, Card, ListGroup } from 'react-bootstrap'
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

            <Modal className='work-modal' show={show} onHide={handleClose}>
                <div className='work-content'>
                    <Modal.Header className='work-head' closeButton >
                    </Modal.Header>
                    <Modal.Body>
                        <Card>
                            <Card.Title className='p-4 mb-0'>Visit More LinkedIn Products</Card.Title>
                            <ListGroup variant="flush" className='icon-list'>
                                <div>
                                    <small className='mb-1 pr-2'>Learning</small>
                                    <small className='mb-1 pr-2'>Insights</small>
                                    <small className='mb-1 pr-2'>Post a Job</small>
                                    <small className='mb-1 pr-2'>Advertise</small>
                                </div>

                                <div>
                                    <small className='mb-1 pr-2'>Find Leads</small>
                                    <small className='mb-1 pr-2'>Groups</small>
                                    <small className='mb-1 pr-2'>ProFinder</small>
                                    <small className='mb-1 pr-2'>Salary</small>
                                </div>
                            </ListGroup>
                        </Card>
                        <Card className='mt-2'>
                            <Card.Title className='p-4 mb-0'>LinkedIn Business Services</Card.Title>
                            <ListGroup variant="flush" className='work-title'>

                                <div className='work-list-sec'>
                                    <ListGroup.Item className='work-list'>Talent Solutions</ListGroup.Item>
                                    <small className='mb-1'>Find, attract and recruit talent</small>
                                </div>

                                <div className='work-list-sec'>
                                    <ListGroup.Item className='work-list'>Sales Solutions</ListGroup.Item>
                                    <small className='mb-1'>Unlock sales opportunities</small>
                                </div>

                                <div className='work-list-sec'>
                                    <ListGroup.Item className='work-list'>Post a job for free</ListGroup.Item>
                                    <small className='mb-1'>Get your job in front of quality candidates</small>
                                </div>
                            
                                <div className='work-list-sec'>
                                    <ListGroup.Item className='work-list'>Marketing Solutions</ListGroup.Item>
                                    <small className='mb-1'>Acquire customers and grow your business</small>
                                </div>

                                <div className='work-list-sec'>
                                    <ListGroup.Item className='work-list'>Learning Solutions</ListGroup.Item>
                                    <small className='mb-1'>Develop talent across your organization</small>
                                </div>
                               
                                

                            </ListGroup>
                            <Card.Title className='work-list last'>Create Company Page</Card.Title>
                        </Card>
                    </Modal.Body>
                </div>
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