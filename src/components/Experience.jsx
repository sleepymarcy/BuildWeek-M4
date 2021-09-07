import { Card, ListGroup, Button } from 'react-bootstrap'
import { Picon, Pencil } from '../assets/icons.jsx'
import '../css/Experience.css'

const Experience = () => {
    return (
        <Card as='ul' className='list'>
            <Card.Body className='card-wrapper' >
                <Card.Header className='experience'>
                    <Card.Title className='title'>Experience</Card.Title>
                    <Card.Link className='plus'><Button className='p-0 ex-btn' variant='none'><Picon className='plus-icon' /></Button></Card.Link>
                </Card.Header>

                <ListGroup variant="flush">

                    <Card.Link className='link-wrapper'>
                        <img className='job-logo' src="https://media-exp1.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_100_100/0/1593351903670?e=1639008000&amp;v=beta&amp;t=38emh8r8X3fw7Ah3ky91KyaVJT_6wSkxl1MqF2QRf5E" alt="Strive School"></img>
                        <div className='job-wrapper'>
                            <ListGroup.Item as='li'>
                                <p className='job-title'>Student</p>
                                <p className='employer'>Strive School</p>
                                <h6 className='year'><small>Jun 2021 - Present</small></h6>
                            </ListGroup.Item>
                        </div>
                        <Card.Link className='pencil'><Button className='p-0 ex-btn' variant='none'><Pencil /></Button></Card.Link>
                    </Card.Link>

                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default Experience