import { Col, Row } from 'antd'
import React from 'react'

const LatestBanner = () => {
    return (
        <Row className='height80 blackBackground'>
            <Col className='justify_center pato48' draggable xs={24} sm={24} md={24} lg={24}>
                <p className='whiteColor text60 fowe700'>Latest & Popular Movies</p>
            </Col>
        </Row>
    )
}

export default LatestBanner