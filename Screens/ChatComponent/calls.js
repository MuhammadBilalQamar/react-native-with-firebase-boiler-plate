import React, { Component } from 'react';
import { View, Image } from "react-native";
import { Container, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
// import chat from './tabOne';
// import Tab5 from './tabFive';
export default class Calls extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userDetail: [{
                name: "Bilal Qamar",
                status: "don't judge a book by its cover",
                img: require('./images/av1.jpg'),
                callType: require('./images/misscall.png')
            },
            {
                name: "Muhammad Umer",
                status: "A creative man is motivated by desire to achieve.",
                img: require('./images/av2.png'),
                callType: require('./images/recievecall.png')
            },
            {
                name: "Muhammad Bilal",
                status: "A creative man is motivated by desire to achieve.",
                img: require('./images/av3.jpg'),
                callType: require('./images/misscall.png')
            },
            ]
        };
    }

    componentDidMount() {
        // console.log( this.props.navigation.state.params.hi)

    }
    render() {
        const { userDetail } = this.state;
        return (
            // <Icon name="apps" size={20} style={{ color: "blue" }} />
            <Container style={{ marginTop: 10 }}>
                <List>
                    {userDetail.map((item) => {
                        return (
                            <ListItem avatar style={{ marginTop: 15 }}>
                                <Left>
                                    <Thumbnail source={item.img} />
                                </Left>
                                <Body>
                                    <Text>{item.name}</Text>
                                    <Text note>{item.status}</Text>
                                </Body>
                                <Right>
                                    <Image source={item.callType} style={{ width: 28, height: 28, marginRight: 6 }} />
                                    <Text note>2:20pm</Text>
                                </Right>
                            </ListItem>
                        )
                    })}

                </List>
            </Container>
        );
    }
}