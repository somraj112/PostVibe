import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { FaImages } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPostModal } from "../../redux/slice";
import { useEditPostMutation, useSinglePostQuery } from "../../redux/service";
import Loading from "../common/Loading";
import { Bounce, toast } from "react-toastify";

const EditPost = () => {
  const { openEditPostModal, myInfo, postId } = useSelector((state) => state.service);
  const { data: postData } = useSinglePostQuery(postId, { skip: !postId });

  const [editPost, editPostData] = useEditPostMutation();

  const _700 = useMediaQuery("(min-width:700px)");
  const _500 = useMediaQuery("(min-width:500px)");
  const _300 = useMediaQuery("(min-width:300px)");

  const [text, setText] = useState("");
  const [media, setMedia] = useState("");
  const [existingMedia, setExistingMedia] = useState("");

  const mediaRef = useRef();
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(editPostModal(false));
  };

  const handleMediaRef = () => {
    mediaRef.current.click();
  };

  const handleEdit = async () => {
    const data = new FormData();
    data.append("id", postId);
    if (text) {
      data.append("text", text);
    }
    if (media) {
      data.append("media", media);
    }
    await editPost({ id: postId, data });
  };

  useEffect(() => {
    if (postData && postData.post) {
      setText(postData.post.text || "");
      setExistingMedia(postData.post.media || "");
    }
  }, [postData]);

  useEffect(() => {
    if (editPostData.isSuccess) {
      setText("");
      setMedia("");
      dispatch(editPostModal(false));
      toast.success(editPostData.data.msg, {
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
    if (editPostData.isError) {
      toast.error(editPostData.error.data.msg, {
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
  }, [editPostData.isSuccess, editPostData.isError, dispatch]);

  return (
    <>
      <Dialog
        open={openEditPostModal}
        onClose={handleClose}
        fullWidth
        fullScreen={_700 ? false : true}
      >
        {editPostData?.isLoading ? (
          <Stack height={"60vh"}>
            <Loading />
          </Stack>
        ) : (
          <>
            <Box
              position={"absolute"}
              top={20}
              right={20}
              onClick={handleClose}
            >
              <RxCross2 size={28} className="image-icon" />
            </Box>
            <DialogTitle textAlign={"center"} mb={5}>
              Edit Vibe Post...
            </DialogTitle>
            <DialogContent>
              <Stack flexDirection={"row"} gap={2} mb={5}>
                <Avatar
                  src={myInfo ? myInfo.profilePic : ""}
                  alt={myInfo ? myInfo.userName : ""}
                />
                <Stack>
                  <Typography
                    variant="h6"
                    fontWeight={"bold"}
                    fontSize={"1rem"}
                  >
                    {myInfo ? myInfo.userName : ""}
                  </Typography>
                  <textarea
                    cols={_500 ? 40 : 25}
                    rows={2}
                    className="text1"
                    placeholder="Start a Vibe Post..."
                    autoFocus
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                  {media ? (
                    <img
                      src={URL.createObjectURL(media)}
                      alt=""
                      id="url-img"
                      width={_500 ? 300 : _300 ? 200 : 100}
                      height={_500 ? 300 : _300 ? 200 : 100}
                    />
                  ) : existingMedia ? (
                    <img
                      src={existingMedia}
                      alt=""
                      id="url-img"
                      width={_500 ? 300 : _300 ? 200 : 100}
                      height={_500 ? 300 : _300 ? 200 : 100}
                    />
                  ) : null}
                  <FaImages
                    size={28}
                    className="image-icon"
                    onClick={handleMediaRef}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    className="file-input"
                    ref={mediaRef}
                    onChange={(e) => setMedia(e.target.files[0])}
                  />
                </Stack>
              </Stack>
              <Stack
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography variant="h6" fontSize={"1rem"} color={"gray"}>
                  Anyone can reply
                </Typography>
                <Button
                  size="large"
                  sx={{
                    bgcolor: "GrayText",
                    color: "white",
                    borderRadius: "10px",
                    ":hover": { bgcolor: "gray", cursor: "pointer" },
                  }}
                  onClick={handleEdit}
                >
                  Post
                </Button>
              </Stack>
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  );
};

export default EditPost;
