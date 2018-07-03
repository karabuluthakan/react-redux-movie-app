import React  from 'react';

import {
    Container, Divider,  Image, List,  Segment,
} from 'semantic-ui-react';

const Footer = props => {
        return (
            <div>
                <Segment
                    inverted
                    style={{ margin: '3em 1em 1em', padding: '2em 2em' }}
                    vertical
                >
                    <Container textAlign='center'>
                        <Divider inverted section />
                        <Image src='https://react.semantic-ui.com/logo.png' centered size='mini' />
                        <List horizontal inverted divided link>
                            <List.Item as='a' href='#'>Site Map</List.Item>
                            <List.Item as='a' href='#'>Contact Us</List.Item>
                            <List.Item as='a' href='#'>Terms and Conditions</List.Item>
                            <List.Item as='a' href='#'>Privacy Policy</List.Item>
                        </List>
                    </Container>
                </Segment>
            </div>
        );
};

export default Footer;
