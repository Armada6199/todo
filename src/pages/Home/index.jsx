import React from 'react'
import { Box, Container, Flex, Title } from '@mantine/core';
import Form from '../../Componenets/Form';

function Home() {
  return (
    <Container size="60rem" px={200} mih={400} style={{color:'white'}}>
          <Box>
        <Title bg={'dark'} weight={400} align='center' order={1}>To Do Application </Title>
        </Box>
         <Flex
      mih={400}
      gap="md"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
    >
        <Box>
            <Form/>
        </Box>
    </Flex>
        
    </Container>
  )
}

export default Home