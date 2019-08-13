import React, { Component } from 'react';
import { Container, Header, Left, Right, Body, Title, Thumbnail, Item, Icon, Input, Subtitle, Footer, FooterTab, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
// import console = require('console');
export default class ChatToParticularUser extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            user: []
        };
    };

    componentDidMount() {
        this.setState({
            user: this.props.navigation.state.params.userData
        })
        // console.log("particular user props___________________", this.props.navigation.state.params.userData)
    }
    render() {
        const { user } = this.state;
        return (
            // { user== null &&}
            <Container style={{ marginTop: 25 }}>
                <Header>
                    <Left >
                        <Thumbnail source={user.img} />
                    </Left>
                    <Body>
                        <Title>{user.name}</Title>
                        <Subtitle>Online</Subtitle>
                    </Body>
                    <Right >
                        <Thumbnail style={{ width: 25, height: 28 }} source={require('./images/recievecall.png')} />
                    </Right>
                </Header>
                <Grid>
                    {/* <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
                    <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col> */}
                </Grid>

                <Item style={{ padding: 10, borderWidth: 3, borderColor: "gray", marginBottom: 20 }} rounded>
                    <Icon active name='ios-flower' />
                    <Input placeholder='Icon Textbox' />
                    <Right style={{ flexDirection: "row",justifyContent:"flex-end",alignItems:'center' }}>
                        <Icon active name='microphone' size={30} style={{ color: "blue", }} />
                        <Icon active name='ios-arrow-dropright' size={30} style={{ color: "blue",marginLeft:10 }} />
                        {/* <Thumbnail style={{ width: 25, height: 28 }} source={require('./images/recievecall.png')} /> */}
                    </Right>
                </Item>

            </Container>
        );
    }
}