import { Grid, Stack, useMediaQuery } from "@mui/material";
import Navbar from "./Navbar";
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleMainMenu, toggleColorMode } from "../../redux/slice";
import { IoSunny, IoMoon } from "react-icons/io5";
const Header = () => {
  const { darkMode } = useSelector((state) => state.service);
  const _700 = useMediaQuery("(min-width:700px)");

  const dispatch = useDispatch();

  const handleOpenMenu = (e) => {
    dispatch(toggleMainMenu(e.currentTarget));
  };
  const handleToggleTheme = () => {
    dispatch(toggleColorMode());
  };
  return (
    <>
      {_700 ? (
        <Stack
          flexDirection={"row"}
          height={52}
          justifyContent={"space-around"}
          alignItems={"center"}
          position={"sticky"}
          top={0}
          py={1}
        >
          {darkMode ? (
            <img
              src="/PostVibeBlack.png"
              alt="logo"
              width={90}
              height={50}
            />
          ) : (
            <img
              src="/PostVibeWhite.png"
              alt="logo"
              width={90}
              height={50}
            />
          )}
          <Stack
            justifyContent={"center"}
            width={"550px"}
            bgcolor={darkMode ? "" : "aliceblue"}
            zIndex={2}
            height={96}
          >
            <Navbar />
          </Stack>
          <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
            {darkMode ? (
              <IoSunny
                size={30}
                className="image-icon"
                onClick={handleToggleTheme}
              />
            ) : (
              <IoMoon
                size={30}
                className="image-icon"
                onClick={handleToggleTheme}
              />
            )}
            <IoMenu
              size={36}
              className="image-icon"
              color="gray"
              onClick={handleOpenMenu}
            />
          </Stack>
        </Stack>
      ) : (
        <>
          <Stack
            position={"fixed"}
            bottom={0}
            justifyContent={"center"}
            width={"100%"}
            height={52}
            p={1}
            bgcolor={"aliceblue"}
            zIndex={2}
          >
            <Navbar />
          </Stack>
          <Grid
            container
            height={60}
            justifyContent={"flex-end"}
            alignItems={"center"}
            p={1}
          >
            <Grid item xs={6}>
              <img
                src="/PostVibeWhite.png"
                alt="logo"
                width={90}
                height={50}
              />
            </Grid>
            <Grid item xs={6} display={"flex"} justifyContent={"flex-end"} gap={2} alignItems={"center"}>
              {darkMode ? (
                <IoSunny
                  size={30}
                  className="image-icon"
                  onClick={handleToggleTheme}
                />
              ) : (
                <IoMoon
                  size={30}
                  className="image-icon"
                  onClick={handleToggleTheme}
                />
              )}
              <IoMenu size={36} className="image-icon" color="gray" onClick={handleOpenMenu} />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};
export default Header;
