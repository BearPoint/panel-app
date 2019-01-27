import React from 'react'
import { Grid, Row, Col} from 'react-bootstrap'
import { MainButtonOption} from './../syled'
export const Home = props=>{
    const handleClick = (e)=> props.history.push(e.target.id)
    return(
        <Grid>
            <Row>
                <Col xs={4}>
                    <MainButtonOption id="audio" name="Audio" onClick={handleClick}>
                        Audio 
                    </MainButtonOption>
                </Col>
                <Col xs={4}>
                    <MainButtonOption id="camara" name="Camara" onClick={handleClick}>
                        Camara  
                    </MainButtonOption>
                </Col>
                <Col xs={4}>
                    <MainButtonOption id="acciones" name="Acciones" onClick={handleClick}>
                        Acciones  
                    </MainButtonOption>
                </Col>
                <Col xs={4}>
                    <MainButtonOption id="" name="luces" onClick={handleClick}>
                        hi  
                    </MainButtonOption>
                </Col>
                <Col xs={4}>
                    <MainButtonOption id="" name="luces" onClick={handleClick}>
                        hi  
                    </MainButtonOption>
                </Col>
                <Col xs={4}>
                    <MainButtonOption id="" name="luces" onClick={handleClick}>
                        hi  
                    </MainButtonOption>
                </Col>
                
            </Row>
        </Grid>
    )
}