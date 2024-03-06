import { useState } from "react";
import {
  DeleteIcon,
  EditIcon,
  ThreeDot,
  TimeIcon,
} from "../../constants/image";
import { useAvatar } from "../../hooks";
import { getDateDifferenceFromNow } from "../../utlis";

export default function PostHeader({ post }) {
  const { avatarURL } = useAvatar(post);
  const [showAction, setShowAction] = useState(false);

  return (
    <header className="flex items-center justify-between gap-4">
      {/* <!-- author info --> */}
      <div className="flex items-center gap-3">
        <img
          className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
          src={avatarURL}
          alt="avatar"
        />
        <div>
          <h6 className="text-lg lg:text-xl">{post?.author?.name}</h6>
          <div className="flex items-center gap-1.5">
            <img src={TimeIcon} alt="time" />
            <span className="text-sm text-gray-400 lg:text-base">
              {`${getDateDifferenceFromNow(post.createAt)} Ago`}
            </span>
          </div>
        </div>
      </div>
      {/* <!-- author info ends --> */}

      {/* <!-- action dot --> */}
      <div className="relative">
        <button onClick={() => setShowAction((prevAction) => !prevAction)}>
          <img src={ThreeDot} alt="3dots of Action" />
        </button>

        {/* <!-- Action Menus Popup --> */}
        {showAction && (
          <div className="action-modal-container">
            <button className="action-menu-item hover:text-lwsGreen">
              <img src={EditIcon} alt="Edit" />
              Edit
            </button>
            <button className="action-menu-item hover:text-red-500">
              <img src={DeleteIcon} alt="Delete" />
              Delete
            </button>
          </div>
        )}
      </div>
      {/* <!-- action dot ends --> */}
    </header>
  );
}
