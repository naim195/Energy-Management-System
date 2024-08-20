import PropTypes from "prop-types";
import classNames from "classnames";

// CardContent provides a padded container for the card's main content
const CardContent = ({ children, className, ...props }) => {
  return (
    <div className={classNames("p-4", className)} {...props}>
      {children}
    </div>
  );
};

// Define PropTypes for type-checking
CardContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// Export the CardContent component for use in other parts of the application
export default CardContent;
