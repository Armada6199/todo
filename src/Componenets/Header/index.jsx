import React from 'react'
import { Anchor, Container } from '@mantine/core';

function Header() {
  return (
    <Container fluid bg={'blue'} p={'md'} mb={20} >
            <header>
                <nav>
                <Anchor  href="/" weight={500} m={30} color='black' style={{fontSize:'20px'}} >
                    Home
            </Anchor>
            <Anchor  href="/settings" weight={500} color='black' style={{fontSize:'20px'}} >
                    Settings
            </Anchor>
                </nav>
            </header>
    </Container>
    
  )
}

export default Header