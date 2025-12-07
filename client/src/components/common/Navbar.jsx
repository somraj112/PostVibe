import { GoHomeFill } from "react-icons/go";
import { Stack, useMediaQuery, IconButton } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPostModal } from "../../redux/slice";
import { useEffect, useState } from "react";
const Navbar = () => {
  const { darkMode, myInfo } = useSelector((state) => state.service);

  const _300 = useMediaQuery("(min-width:300px)");
  const _700 = useMediaQuery("(min-width:700px)");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [showArrow, setShowArrow] = useState(false);

  const checkArrow = () => {
    if (window.location.pathname.includes("/post/") && _700) {
      setShowArrow(true);
      return;
    }
    setShowArrow(false);
  };

  const handleAddPost = () => {
    dispatch(addPostModal(true));
  };

  const handleNavigate = () => {
    navigate(-1);
  };

  useEffect(() => {
    checkArrow();
  }, [window.location.pathname]);

  return (
    <>
      <Stack
        flexDirection={"row"}
        maxWidth={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        {showArrow ? (
          <IconButton onClick={handleNavigate}>
            <FiArrowLeft
              size={_300 ? 28 : 24}
              color={darkMode ? "white" : "black"}
            />
          </IconButton>
        ) : null}

        <IconButton component={Link} to={"/"}>
          <GoHomeFill
            size={_300 ? 32 : 28}
            color={
              location.pathname === "/"
                ? darkMode
                  ? "white"
                  : "black"
                : "gray"
            }
          />
        </IconButton>

        <IconButton component={Link} to={"/search"}>
          <IoIosSearch
            size={_300 ? 32 : 28}
            color={
              location.pathname === "/search"
                ? darkMode
                  ? "white"
                  : "black"
                : "gray"
            }
          />
        </IconButton>

        <IconButton onClick={handleAddPost}>
          <TbEdit
            size={_300 ? 32 : 28}
            color={"gray"}
          />
        </IconButton>

        <IconButton>
          <CiHeart
            size={_300 ? 32 : 28}
            color={"gray"}
          />
        </IconButton>

        <IconButton component={Link} to={`/profile/threads/${myInfo?._id}`}>
          <RxAvatar
            size={_300 ? 32 : 28}
            color={
              location.pathname.includes("/profile")
                ? darkMode
                  ? "white"
                  : "black"
                : "gray"
            }
          />
        </IconButton>
      </Stack>
    </>
  );
};
export default Navbar;
