import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState, useEffect} from "react";
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home') //默认初始在home
    const [scrolled, setScrolled] = useState(false) //记录滚动
    const onUpdateActiveLink = (value) => { //活跃链接
        setActiveLink(value)
    }
    useEffect(() => {
        //mounted 触发
        const onScroll = () => {
            if (window.scrollY > 50) {//垂直方向已经滚动50px
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onscroll)//对window添加事件监听
        //组件unmount时 移除事件监听
        return () => window.removeEventListener("scroll", onScroll)
    }, [])
    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                                  onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills"
                                  className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                                  onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects"
                                  className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                                  onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt=""/></a>
                            <a href="#"><img src={navIcon2} alt=""/></a>
                            <a href="#"><img src={navIcon3} alt=""/></a>
                        </div>
                        <button className="vvd" onClick={() => {
                            console.log('connect')
                        }}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}