import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editCommentModal } from "../../redux/slice";
import { useEditCommentMutation } from "../../redux/service";
import Loading from "../common/Loading";
import { Bounce, toast } from "react-toastify";

const EditComment = () => {
  const { openEditCommentModal, commentId, commentText } = useSelector(
    (state) => state.service
  );

  const [editComment, editCommentData] = useEditCommentMutation();

  const _700 = useMediaQuery("(min-width:700px)");

  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(editCommentModal(false));
  };

  const handleEdit = async () => {
    await editComment({ id: commentId, text });
  };

  useEffect(() => {
    if (commentText) {
      setText(commentText);
    }
  }, [commentText]);

  useEffect(() => {
    if (editCommentData.isSuccess) {
      dispatch(editCommentModal(false));
      toast.success(editCommentData.data.msg, {
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
    if (editCommentData.isError) {
      toast.error(editCommentData.error.data.msg, {
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
  }, [editCommentData.isSuccess, editCommentData.isError, dispatch]);

  return (
    <>
      <Dialog
        open={openEditCommentModal}
        onClose={handleClose}
        fullWidth
        fullScreen={_700 ? false : true}
      >
        {editCommentData?.isLoading ? (
          <Stack height={"20vh"}>
            <Loading />
          </Stack>
        ) : (
          <>
            <DialogTitle textAlign={"center"} mb={2}>
              Edit Comment
            </DialogTitle>
            <DialogContent>
              <Stack gap={2}>
                <TextField
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={3}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    ":hover": { bgcolor: "gray" },
                  }}
                  onClick={handleEdit}
                >
                  Update
                </Button>
              </Stack>
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  );
};

export default EditComment;
