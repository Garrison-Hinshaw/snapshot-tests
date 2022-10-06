import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>Garrison-Hinshaw</Card.Title>
        <Card.Text>
          I am working on honing my skills as a software engineer and I like to golf in my free-time.
        </Card.Text>
        <Button variant="primary">My Button</Button>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard;