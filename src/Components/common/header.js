import React, {Component} from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';
import { batteryServices, batterySelectClass} from './../../services'
import { GoBackButton } from '../../syled';

const Battery = (props)=>{

    return(
        <i style={{margin: '0 5px', color:props.color }} className={'fas fa-' + props.level}/>
    )
}

class HeaderClass extends Component{
    state = {
        battery: {
            charging: false,
            level: 100,
            batteryClass: 'battery-full',
            color: 'white'
        },
        date: '00:00',
        isMainPage: false,
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
        },
    }
    componentWillMount(){
        batteryServices.then(bat=>{
            var chargingloop;
            console.log(bat)
            let battery = {
                level:Math.round(bat.level*100),
                batteryClass: batterySelectClass(bat.level),
                charging: bat.charging,
                color: this.level <=10 ? 'red': 'white'
            }
            console.log(battery)
            this.setState({battery},()=>{
                console.log(this.state)
            })   
            
            bat.onlevelchange = () => {
                console.log('batter changes')

                let batter = {
                    ...this.state.battery,
                    level:Math.round(bat.level *100),
                    color: this.level <=10 ? 'red': 'white',
                    batteryClass: batterySelectClass(bat.level)   
                }
                console.log(batter)
                this.setState({battery})
            };
            bat.onchargingchange = (x)=>{
                console.log('hi',x)
                var i=0
                var posiblesState = ['battey-empty','battery-quarter','battery-half','battery-three-quarters', 'battery-full']
                chargingloop = this.setIntervalAndExecute(() =>{ 
                    console.log('charging...')
                    let battery = {
                        ...this.state.battery,
                        batteryClass: posiblesState[i]
                    }
                    this.setState({battery})
                    i>=4 ?i++: i=0
                    
                },
                3000
                );
            }
            bat.ondischargingtimechange = ()=>{
                clearInterval(chargingloop);
                console.log('disCharging')
                let battery={
                    ...this.state.battery,
                    charging: false 
                }
                this.setState({battery})
            }

            
        })
        this.setIntervalAndExecute(
            () => {
                let date = new Date();
                const hour = date.getHours()>9? date.getHours(): '0'+ date.getHours();
                const min = date.getMinutes()>9? date.getMinutes() : '0'+ date.getMinutes()
                
                this.setState({ date: hour+':'+min })
            },
            1000
        );
        console.log(this.props.history,length)
    }
    setIntervalAndExecute = (fn, t)=> {
        fn();
        return(setInterval(fn, t));
    }
    clickHandle = (e)=>{
        console.log('hi', e.target.id);
        e.target.id == "home" ? this.props.history.replace('/') : this.props.history.goBack()
    }
    render(){
        return(
            <Grid fluid style={this.style.grid}>  
                <Row style={this.style.row}>
                <Col  xs={3} xsOffset={9}>
                <div style={this.style.wrapp}>
                    <div style={this.style.item}>{this.state.date}</div>
                    <div style={this.style.item}>
                    <div style={this.style.bgWifi}>
                    <i className="fas fa-wifi" style={this.style.icon}  data-fa-transform="rotate-180"></i>
                    </div>
                    </div>
                    <div style={this.style.item}><Battery  color={this.state.battery.color} level={this.state.battery.batteryClass}/>{this.state.battery.level}%</div>
                    </div>
                </Col>
                </Row>
                {!this.state.isMainPage? <Row>
                    <Col xs={3}>
                        <GoBackButton id="back" onClick={this.clickHandle}>
                            back
                        </GoBackButton>
                    </Col>
                    <Col xs={3}>
                        <GoBackButton id="home" onClick={this.clickHandle}>
                            home
                        </GoBackButton>
                    </Col>
                </Row>: null}
            </Grid>
        )
    }
}
export const Header = withRouter(HeaderClass);