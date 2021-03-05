import http from "../http-common";

export const upload = (file, userToken, onUploadProgress) => {
  let formData = new FormData();

  formData.append("image", file);
  formData.append("user-token", userToken);

  return http.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

export const getFiles = () => {
  return http.get("/files");
};