import {Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import HeaderImg from '../assets/img/header-img.svg'
import {useState, useEffect} from "react";

export const Banner = () => {
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"]
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState("")
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000
    useEffect(() => {
        const ticker = setInterval(() => {
            tick()
        }, delta)
        return () => {
            clearInterval(ticker)
        }
        // eslint-disable-next-line
    }, [text])//每次文本更新时运行
    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`Hi I am Origami `}
                            <br/>
                            <span className="wrap">{text}</span>
                        </h1>
                        <p>This is my personal portfolio, and this website is used to share my personal projects</p>
                        <button onClick={() => {
                            console.log('connect')
                        }}>Let's Connect<ArrowRightCircle size={25}/>
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImg} alt=""/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}