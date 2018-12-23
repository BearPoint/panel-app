import React, {Component} from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { batteryServices} from './../../services'
export class Header extends Component{
    state = {
        charging: false,
        date: '00:00',
        level: 100
    }
    style= {
        row:{
            backgroundColor: 'black'
        },
        wrapp:{
            display: 'flex',
            justifyContent: 'flex-end'
        },
        item:{
            margin: '0 10px'
        },
        bgWifi:{
            backgroundColor: 'red',
            'WebkitClipPath': 'polygon(50% 0%, 0% 100%, 100% 100%)',
            'clipPath': 'polygon(50% 0%, 0% 100%, 100% 100%)',
            'msTransform': 'rotate(180deg)', /* IE 9 */
            'WebkitTransform': 'rotate(180deg)', /* Safari 3-8 */
            transform: 'rotate(180deg)',
            position: 'absolut',
            botton: '0px'
        },
        icon:{
            color:'transparent',
            'msTransform': 'rotate(180deg)', /* IE 9 */
            'WebkitTransform': 'rotate(180deg)', /* Safari 3-8 */
            transform: 'rotate(180deg)'
        }
    }
    componentDidMount(){
        batteryServices().then(battery=>{
            console.log(battery())
        })
        setInterval(
            () => {
                let date = new Date();
                const hour = date.getHours()>9? date.getHours(): '0'+ date.getHours();
                const min = date.getMinutes()>9? date.getMinutes() : '0'+ date.getMinutes()
                
                this.setState({ date: hour+':'+min })
            },
            1000
        );
    }
    render(){
        return(
            <Grid fluid>
                <Row style={this.style.row}>
                <Col  xs={3} xsOffset={9}>
                <div style={this.style.wrapp}>
                    <div style={this.style.item}>{this.state.date}</div>
                    <div style={this.style.item}>
                    <div style={this.style.bgWifi}>
                        <i className="fas fa-wifi" style={this.style.icon}  data-fa-transform="rotate-180"></i>
                    </div>
                    </div>
                    <div style={this.style.item}>{this.state.level}%</div>
                    </div>
                </Col>
                </Row>
            </Grid>
        )
    }
}