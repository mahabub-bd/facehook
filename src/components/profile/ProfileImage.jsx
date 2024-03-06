import { useRef } from "react";
import { actions } from "../../actions";
import { api } from "../../api";
import { EditIcon } from "../../constants/image";
import { useProfile } from "../../hooks";

const ProfileImage = () => {
  const { state, dispatch } = useProfile();
  const fileUploaderRef = useRef();

  const handleImageUpload = (event) => {
    event.preventDefault();

    fileUploaderRef.current.addEventListener("change", updateImageDisplay);
    fileUploaderRef.current.click();
  };

  const updateImageDisplay = async () => {
    const formData = new FormData();
    for (const file of fileUploaderRef.current.files) {
      formData.append("avatar", file);

      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
          state?.user?.id
        }/avatar`,
        formData
      );

      try {
        if (response.status === 200) {
          dispatch({
            type: actions.profile.IMAGE_UPDATED,
            data: response.data,
          });
        }
      } catch (error) {
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    }
  };

  return (
    <div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      <img
        className="max-w-full rounded-full"
        src={`${import.meta.env.VITE_SERVER_BASE_URL}/${state?.user?.avatar}`}
        alt="sumit saha"
      />

      <form>
        <button
          onClick={handleImageUpload}
          type="submit"
          className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
        >
          <img src={EditIcon} alt="Edit" />
        </button>
        <input id="file" type="file" hidden ref={fileUploaderRef} />
      </form>
    </div>
  );
};

export default ProfileImage;
