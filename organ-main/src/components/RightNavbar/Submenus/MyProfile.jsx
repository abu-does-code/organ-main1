//REACT ROUTER
// import { Link } from "react-router-dom";

//HOOKS
import useClickOutside from "../../../CustomHooks/ClickOutside";
import { useState } from "react";

//ICONS , PICS , STYLES
import styles from "./MyProfile.module.scss";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import { ReactComponent as Avatar } from "../../../pics/avatar.svg";

const MyProfile = () => {
  const [isProfileOpen, setisProfileOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setisProfileOpen(false);
  });
  return (
    <div
      ref={domNode}
      className={styles.avatar_container}
      onClick={() => {
        setisProfileOpen(!isProfileOpen);
      }}
    >

      <div className={styles.name}>
        <button style={{width:"8rem",
      height:"3rem", fontSize:"1.4rem",
      border: "2rem",
      color:"#FA9494"}}>Sign in</button>
      </div>

    </div>
  );
};

export default MyProfile;