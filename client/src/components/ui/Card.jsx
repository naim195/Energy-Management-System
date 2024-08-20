import PropTypes from "prop-types";
import classNames from "classnames";

// The Card component is a flexible container with default styles and additional class support
const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={classNames(
        "bg-white shadow-lg rounded-lg overflow-hidden",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Define PropTypes for type-checking
Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// Export the Card component for use in other parts of the application
export default Card;
