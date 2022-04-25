import { Col, Row } from 'antd'
import React from 'react'

const DonateBanner = () => {
    return (
        <Row className='height40 darkBackground'>
            <Col className='justify_center pato48' draggable xs={24} sm={24} md={24} lg={24}>
                <p className='whiteColor text60 fowe700'>Donate</p>
            </Col>
        </Row>
    )
}

export default DonateBanner