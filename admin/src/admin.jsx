import React, {
    Component
} from 'react'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Navleft from './components/Navleft/index'

import {
    Row,
    Col
} from 'antd';

export default class Admin extends Component {
    render() {
        return (
            <Row className="contianer">
                <Col span={4} className="nav-left">
                    <Navleft />
                </Col>
                <Col span={20} className="main">
                    <Header />

                    <Row className="content">
                        content
                        {/* {this.props.children} */}
                    </Row>
                    <Footer />

                </Col>
            </Row>
        );
    }
}