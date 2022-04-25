import React from 'react'
import { Row, Col, Button } from 'antd'

const HomeBanner = () => {
    return (
        <Row className='muvizi_mainbanner' justify='center' align='middle'>
            <Col draggable xs={24} sm={24} md={10} lg={10}>
                <h1 className='whiteColor text60 fowe900 text_center'>Watch movies, TV shows, and more for completely free!</h1>
                <p className='whiteColor textmedium mato24 text_center fowe300'>No subscription or sign in required! just Enjoy!</p>
                <div className='mato40 flex_center'>
                    <Button className='muvizi_btn btn_large btn_primary'>Get started</Button>
                </div>
            </Col>
        </Row>
    )
}

export default HomeBanner