import React from 'react';
import './App.css';
import {
    Route,
    Link,
    Routes,
    BrowserRouter
} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Registration';
import HomePage from './components/pages/home_page/Home';
import NotFound from './components/pages/not_found/NotFound';

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
            <Container>
                <Row>
                    <Col>
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/" element={<HomePage />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>

    );
}

export default App;
