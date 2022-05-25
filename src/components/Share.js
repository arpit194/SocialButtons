import classes from "./Share.module.css";

const Share = (props) => {
  return <div className={classes.share}>Link shared using {props.name}</div>;
};

export default Share;
