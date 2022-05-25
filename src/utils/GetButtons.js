import {
  FacebookButton,
  TwitterButton,
  LinkedInButton,
  EmailButton,
  RedditButton,
} from "react-social";

const style = {
  width: "100%",
  height: "100%",
  border: "none",
  background: "transparent",
  borderRadius: "50px",
  padding: "0",
};

const GetButton = (props) => {
  const { message, title, name } = props.details;
  const Socials = {
    twitter: <TwitterButton style={style} message={message} title={title} />,
    linkedin: <LinkedInButton style={style} message={message} title={title} />,
    facebook: (
      <FacebookButton
        style={style}
        message={message}
        title={title}
        appId="1499760697123181"
        sharer={true}
      />
    ),
    email: (
      <EmailButton
        style={style}
        message={message}
        title={title}
        target="_self"
      />
    ),
    reddit: <RedditButton style={style} message={message} title={title} />,
  };
  return Socials[name];
};

export default GetButton;
