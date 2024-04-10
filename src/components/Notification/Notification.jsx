import css from "./Notification.module.css";
import PropTypes from "prop-types";

const Notification = ({ title }) => {
  return <p className={css.notification}>{title}</p>;
};
Notification.propTypes = {
  title: PropTypes.string,
};

export default Notification;
