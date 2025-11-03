import { Button, Stack, TextField, Typography } from "@mui/material";

const Register = () => {
  return (
    <>
      <Stack
        width={"100%"}
        height={"100vh"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          backgroundImage: 'url("/register-bg.webp")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 600px",
        }}
      >
        <Stack flexDirection={"column"} width={"40%"} gap={2} mt={20}>
          
          <Typography
          variant="h5"
          fontSize={'1.5rem'}
          fontWeight={'bold'}
          alignSelf={'center'}>
            Register with Email
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Enter your username..."
          />
          <TextField
            variant="outlined"
            placeholder="Enter your email..."
          />
          <TextField
            variant="outlined"
            placeholder="Enter your password..."
          />
          <Button size="large"
          sx={{
            width: '100%',
            height:52,
            bgcolor: 'green',
            fontSize: '1rem',
            color: 'white',
            ':hover': {
              backgroundColor: 'blue',
              cursor: 'pointer',
            },
          }}>Sign Up
          </Button>
          <Typography
            variant="subtitle1"
            alignSelf={'center'}
            sx={{ mt: 2 }}
          >
            Already have an account? <span className="login-link">Login</span>
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Register;
