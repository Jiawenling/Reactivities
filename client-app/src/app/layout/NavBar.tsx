import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

interface Props{
    openForm: ()=> void 
}
export default function NavBar({openForm}: Props){
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='/assets/logo.png' alt='logo' style={{marginRight: 50}}/>
                    Reactivites
                </Menu.Item>
                <Menu.Item name="Activities"/>
                <Menu.Item>
                    <Button positive content='Create Activity' onClick={openForm}></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}