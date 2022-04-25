import { Col, Row } from 'antd'
import React from 'react'

const EnjoyBanner = () => {
    return (
        <Row className='height80 darkBackground items_center app_padding'>
            <Col draggable xs={24} sm={24} md={12} lg={12}>
                <p className='whiteColor text60 fowe700'>Enjoy watching them on any screen.</p>
                <p className='mato24 fowe400 textmedium'>From very small screens to large ones, <br /> Watch your favorite program with great pleasure.</p>
            </Col>
        </Row>
    )
}

export default EnjoyBanner