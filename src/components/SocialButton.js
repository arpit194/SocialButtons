import { useEffect, useRef } from "react";
import GetButton from "../utils/GetButtons";
import classes from "./SocialButton.module.css";

const SocialButton = (props) => {
  const divRef = useRef();

  console.log(props);

  useEffect(() => {
    if (props.details.name !== "twitter") {
      if (props.open) {
        divRef.current.style.width = "50px";
        divRef.current.style.height = "50px";
        divRef.current.style.marginBottom = "5px";
      } else {
        divRef.current.style.width = "0px";
        divRef.current.style.height = "0px";
        divRef.current.style.marginBottom = "0px";
      }
    }
  }, [props.open]);
  const cls =
    props.details.name === "twitter"
      ? `${classes.twitter}`
      : `${classes.container} ${props.open ? classes.reveal : classes.hide}`;
  return (
    <div
      style={{ backgroundImage: `url(${props.details.imageUrl})` }}
      ref={divRef}
      className={cls}
      onClick={() => {
        props.onClick(props.details.name);
      }}
    >
      <GetButton details={props.details} />
    </div>
  );
};

export default SocialButton;
