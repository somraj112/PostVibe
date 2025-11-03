import React from 'react'
import {Avatar, Stack, Typography, Button} from '@mui/material'
const Input = () => {
  return (
    <>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        width={"70%"}
        height={28}
        justifyContent={"space-between"}
        p={3}
        borderBottom={'2px solid gray'}
        my={5}
        mx={'auto'}
      >
        <Stack flexDirection={'row'} alignItems={'center'} gap={2}>
            <Avatar src='' alt='AJ' />
            <Typography color={'GrayText'}>Start a Thread</Typography>
        </Stack>
        <Button
            size="medium"
            sx={{
              bgcolor: "gray",
              color: "aliceblue",
              ":hover": {
                bgcolor: "black",
                cursor: "pointer",
              },
            }}
          >
            POST
          </Button>
      </Stack>
    </>
  );
}

export default Input
