import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useLazySearchUsersQuery } from "../../redux/service";
import { addToSearchedUsers } from "../../redux/slice";
import { Bounce, toast } from "react-toastify";

const SearchInput = () => {
  const { darkMode } = useSelector((state) => state.service);

  const [query, setQuery] = useState();

  const [searchUser, searchUserData] = useLazySearchUsersQuery();

  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    if (query && e.key === "Enter") {
      try {
        const result = await searchUser(query);
        if (result.data) {
          dispatch(addToSearchedUsers(result.data.users));
          toast.success(result.data.msg, {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            transition: Bounce,
          });
        }
        if (result.error) {
          toast.error(result.error.data.msg, {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            transition: Bounce,
          });
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleSearchButton = async () => {
    if (query) {
      try {
        const result = await searchUser(query);
        if (result.data) {
          dispatch(addToSearchedUsers(result.data.users));
          toast.success(result.data.msg, {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            transition: Bounce,
          });
        }
        if (result.error) {
          toast.error(result.error.data.msg, {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            transition: Bounce,
          });
        }
      } catch (err) {
        console.error(err);
      }
    }
  };


  return (
    <>
      <TextField
        sx={{
          width: "90%",
          maxWidth: "750px",
          boxShadow: "5px 5px 5px gray",
          borderRadius: "15px",
          px: 2,
          py: 1,
          my: 5,
          mx: "auto",
          "& .MuiOutlinedInput-root": {
            color: darkMode ? "whitesmoke" : "black",
            "& fieldset": {
              border: "none",
            },
          },
        }}
        placeholder="search user..."
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{ color: darkMode ? "whitesmoke" : "black" }}
            >
              <IconButton onClick={handleSearchButton} edge="end">
                <FaSearch
                  size={20}
                  color={darkMode ? "whitesmoke" : "black"}
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={handleSearch}
      />
    </>
  );
};
export default SearchInput;
