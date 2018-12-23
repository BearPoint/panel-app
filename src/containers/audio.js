import React from "react";
import { TitleContainer } from "./../syled";
import { Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
export const Audio = (props)=>{
    const areasList = [{
        areaName: 'cuarto Paco',
        areaId: 1,
    },{
        areaName: 'Sala de estar',
        areaId: 2,
    }];
    const styleItem = {
        color: 'black'
    }
    return(
        <Grid>
            <Row>
            <TitleContainer>Area de Audio</TitleContainer>
            </Row>
            <Row>
                <Col>
                    <ListGroup>
                        {areasList.map(
                            area=><ListGroupItem style={styleItem} header={area.areaName} key={area.areaId}/>)}
                    </ListGroup>
                </Col>
            </Row>
        </Grid>   
    )
}