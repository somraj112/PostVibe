import Header from "./components/common/Header";
import Loading from "./components/common/Loading";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Protected/Home";
import Search from "./pages/Protected/Search";
import Error from "./pages/Error";
import Register from "./pages/Register";
import { Box } from "@mui/material";
import { H1Icon } from "@heroicons/react/16/solid";
import ProtectedLayout from "./pages/Protected/ProtectedLayout";
const App = () => {
  return (
    <>
    <Box minHeight={'100vh'}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProtectedLayout />}>
            <Route path="" element={<Home />} />
            <Route path="post/:id" element={<h1>single post</h1>} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
    </>
  );
};

export default App;
