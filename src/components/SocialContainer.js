import React, { useState } from "react";
import SocialButton from "./SocialButton";
import classes from "./SocialContainer.module.css";

const socials = [
  {
    name: "twitter",
    imageUrl: "/images/twitter.webp",
    message: "This is our website: ",
    title: "Please Share",
  },
  {
    name: "linkedin",
    imageUrl: "/images/linkedin.png",
    message: "This is our website: ",
    title: "Please Share",
  },
  {
    name: "facebook",
    imageUrl: "/images/facebook.webp",
    message: "This is our website: ",
    title: "Please Share",
  },
  {
    name: "reddit",
    imageUrl: "/images/reddit.png",
    message: "This is our website: ",
    title: "Please Share",
  },
  {
    name: "email",
    imageUrl: "/images/mail.png",
    message: "This is our website: ",
    title: "Please Share",
  },
];

const SocialContainer = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSocials = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.container}>
      <SocialButton
        key={socials[0].name}
        onClick={props.onClick}
        details={socials[0]}
      />
      {socials
        .filter((social) => social.name !== "twitter")
        .map((social) => (
          <SocialButton
            key={social.name}
            onClick={props.onClick}
            open={isOpen}
            details={social}
          />
        ))}
      <div className={classes.options} onClick={openSocials}></div>
    </div>
  );
};

export default SocialContainer;
