import { Stack } from "@mui/material";
import Input from "../../components/Home/input";
import Post from "../../components/home/Post";



const Home = () => {
    return (
        <>
        <Input/>
        <Stack flexDirection={'coloumn'} gap={2} mb={10}>
            <Post />
        </Stack>
        </>
    );
}
export default Home;