import React from 'react'
import { Flex, Button,TextInput } from '@mantine/core';

function Form() {
  return (
    <Flex
    mih={400}
    gap="lg"
    justify="between"
    align="center"
    direction="coulmn"
    wrap="wrap"
  >
    <form action=" "
>
    <TextInput
          label="taskName"
          placeholder="Task Title"
          m={10}
        />
          <TextInput
          label="taskHolder"
          placeholder="Task Holder"
          m={10}

        />
      <Button m={10}  variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Add</Button>
    </form>

  </Flex>
  )
}

export default Form