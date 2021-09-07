import { Card, ListGroup } from 'react-bootstrap'
import '../css/Experience.css'

const Experience = () => {
    return (
        <Card as='ul' className='list'>
            <Card.Body className='card-wrapper' >
                <Card.Title className='title'>Experience</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item as='li' className='job-title'>Student</ListGroup.Item>
                    <ListGroup.Item as='li' className='job-title'>Student</ListGroup.Item>
                    <ListGroup.Item as='li' className='job-title'>Student</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default Experience