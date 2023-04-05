import {Container, Row, Col} from "react-bootstrap";

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`Hi I am Origami `}<span className="wrap">web developer</span></h1>
                        <button onClick={()=>{console.log('connect')}}>Let's Connect</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}