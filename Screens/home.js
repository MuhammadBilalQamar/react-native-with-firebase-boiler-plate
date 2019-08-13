import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Badge, Right, Body, Icon, Text } from 'native-base';
import { Dimensions } from "react-native";
import ChatHome from "./ChatComponent/chatHome"

export default class Home extends Component {

    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        // console.log(this.props.navigation)

    }
    render() {
        return (
            <Container style={{ height: Dimensions.get('window').height }}>
                <Header style={{ marginTop: 20 }}>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>
                            {/* <Icon name='menu' /> */}
                            Chatting app</Title>
                    </Body>
                    <Right />
                </Header>


                {/* MAIN CONTENT WORK */}

                <Content>
                    <ChatHome navProps={this.props.navigation} />
                </Content>

                {/* FOOTER WORK */}

                <Footer style={{ borderTopWidth: 2, backgroundColor: "white" }}>
                    <FooterTab style={{ backgroundColor: "white", justifyContent: "space-around" }}>

                        <Button vertical>
                            {/* <Badge ><Text>51</Text></Badge> */}
                            <Icon active name="person" size={20} style={{ color: "blue" }} />
                            <Text>person</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="camera" size={20} style={{ color: "blue" }} />
                            <Text>camera</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="apps" size={20} style={{ color: "blue" }} />
                            <Text>Apps</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="navigate" size={20} style={{ color: "blue" }} />
                            <Text>navigate</Text>
                        </Button>

                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}