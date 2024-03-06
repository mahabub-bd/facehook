import { useState } from "react";
import { actions } from "../../actions";
import { CheckedIcon, EditIcon } from "../../constants/image";
import { useProfile } from "../../hooks";

const Bio = () => {
  const { state, dispatch } = useProfile();
  const [bio, setBio] = useState(state?.user?.bio);
  const [editMode, setEditMode] = useState(false);
  const handleBioEdit = async () => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    try {
    } catch (error) {}
  };

  return (
    <div className="mt-4 flex items-start gap-2 lg:mt-6">
      <div className="flex-1">
        {!editMode ? (
          <p className="leading-[188%] text-gray-400 lg:text-lg">
            {state.user?.bio}
          </p>
        ) : (
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={3}
            cols={105}
            className="p-4 mx-auto leading-[188%] text-gray-300  card bg-gray-800 lg:lext-lg rounded-md"
          />
        )}
      </div>
      {/* <!-- Edit Bio button. The Above bio will be editable when clicking on the button --> */}
      {!editMode ? (
        <button
          className="flex-center h-7 w-7 rounded-full"
          onClick={() => setEditMode(true)}
        >
          <img src={EditIcon} alt="Edit" />
        </button>
      ) : (
        <button
          className="flex-center h-7 w-7 rounded-full"
          onClick={handleBioEdit}
        >
          <img src={CheckedIcon} alt="Edit" />
        </button>
      )}
    </div>
  );
};

export default Bio;
