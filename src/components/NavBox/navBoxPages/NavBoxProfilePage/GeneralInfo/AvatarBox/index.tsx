import React, { useState } from "react";
import { Typography, Box, IconButton, Avatar } from "@mui/material";
import Icon from "../../../../../Icon";
import {
  circleStyle,
  additionalStyle,
  avatarStyle,
  changeAvatarBTNStyle,
  textStyle
} from "./style";

export const AvatarBox = () => {
  const [selectedFile, setSelectedFile] = useState<Blob | MediaSource | null>();
  const [fileURL, setFileURL] = useState<string | null>();
  const handleCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    if (e.target.files.length) {
      const file = e.target.files[0];
      setSelectedFile(file);
      const currentURL = URL.createObjectURL(file);
      setFileURL(currentURL);
    }
  };

  const deleteAvatarClick = () => {
    if (selectedFile || fileURL) {
      setSelectedFile(null);
      setFileURL(null);
    }
  };

  return (
    <>
      <Box sx={circleStyle}>
        <Avatar sx={avatarStyle} src={fileURL ? fileURL : undefined}>
          <Icon name="CameraIcon" />
        </Avatar>
        {selectedFile ? (
          <>
            <Box sx={changeAvatarBTNStyle}>
              <label htmlFor="faceImage">
                <input
                  accept="image/jpeg/svg"
                  style={{ display: "none" }}
                  id="faceImage"
                  type="file"
                  onChange={handleCapture}
                />
                <IconButton
                  disableRipple
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <Icon name="CameraIcon" />
                </IconButton>
              </label>
            </Box>

            <Box sx={additionalStyle}>
              <IconButton
                disableRipple
                aria-label="upload picture"
                component="span"
                onClick={deleteAvatarClick}
              >
                <Typography sx={textStyle}>X</Typography>
              </IconButton>
            </Box>
          </>
        ) : (
          <Box sx={additionalStyle}>
            <label htmlFor="faceImage">
              <input
                accept="image/jpeg/svg"
                style={{ display: "none" }}
                id="faceImage"
                type="file"
                onChange={handleCapture}
              />
              <IconButton
                disableRipple
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <Icon name="PencilIcon" />
              </IconButton>
            </label>
          </Box>
        )}
      </Box>
    </>
  );
};
