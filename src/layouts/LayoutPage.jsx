import PropTypes from "prop-types";

function LayoutPage({ children }) {
  return (
    <div className="w-full max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto">
      {children}
    </div>
  );
}

LayoutPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutPage;
