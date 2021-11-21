import { Card, Button, NavDropdown } from "react-bootstrap";

function ProductCard({produto}) {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" style={{ height: '202.1px', width: '286px'}} src={produto.fotoUrl} />
          <Card.Body>
            <Card.Title>
              {produto.nome}.
            </Card.Title>
            <Card.Text>
              {produto.descricao}.
            </Card.Text>
            <Card.Title>
              R${produto.preco}
            </Card.Title>
            <br/>
            <Button variant="info">Comprar</Button>
          </Card.Body>
        </Card>
    )
}

export default ProductCard;