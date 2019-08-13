import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab, TabHeading, Icon, Text } from 'native-base';
import Chat from './chat';
import Status from './status';
import Calls from './calls'
export default class ChatHome extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        
        // console.log(this.props.navProps)
    }
    render() {
        return (
            // <Icon name="apps" size={20} style={{ color: "blue" }} />
            <Container >
                <Header hasTabs />
                <Tabs renderTabBar={() => <ScrollableTab />}>
                    <Tab heading={<TabHeading><Icon name="ios-chatbubbles" /><Text>chat</Text></TabHeading>}>
                        <Chat chatHomeNavProps={this.props.navProps} />
                    </Tab>
                    <Tab heading={<TabHeading><Icon name="paper" /><Text>Status</Text></TabHeading>}>
                        <Status />
                    </Tab>
                    <Tab heading={<TabHeading><Icon name="microphone" /><Text>Calls</Text></TabHeading>}>
                        <Calls />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}