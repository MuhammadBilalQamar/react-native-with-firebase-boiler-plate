import React, { Component } from 'react';
import { Container, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
// import chat from './tabOne';
// import Tab5 from './tabFive';
export default class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userDetail: [{
                name: "Bilal Qamar",
                status: "don't judge a book by its cover",
                img: require('./images/av1.jpg'),
                time: "3:43 pm"
            },
            {
                name: "Muhammad Umer",
                status: "A creative man is motivated by desire to achieve.",
                img: require('./images/av2.png'),
                time: "4:43 pm"
            },
            {
                name: "Muhammad Bilal",
                status: "A creative man is motivated by desire to achieve.",
                img: require('./images/av3.jpg'),
                time: "5:43 pm"
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
                            <ListItem avatar style={{ margin: 5 }}>
                                <Left>
                                    <Thumbnail source={item.img} />
                                </Left>
                                <Body>
                                    <Text>{item.name}</Text>
                                    <Text note>{item.status}</Text>
                                </Body>
                                <Right>
                                    <Text note>{item.time}</Text>
                                </Right>
                            </ListItem>
                        )
                    })}

                </List>
            </Container>
        );
    }
}