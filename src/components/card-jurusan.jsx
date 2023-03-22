import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CardJurusan = (props) => {
  return (
    <Card className="p-0">
      <Card.Img variant="top" src={ props.image } />
      <Card.Body className="p-3">
        <Card.Title>
          { props.title }
        </Card.Title>
        <Card.Text>
          { props.subtitle }
        </Card.Text>
        <Button variant="primary">Detail</Button>
      </Card.Body>
    </Card>
  );
};

export default CardJurusan;