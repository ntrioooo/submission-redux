import PoundCard from "./PoundCard";
import PropTypes from "prop-types";

function PoundList({ pounds }) {
  return (
    <div className="mt-5 justify-center flex-col">
      {pounds.map((pound) => (
        <PoundCard key={pound.id} {...pound} />
      ))}
    </div>
  );
}

PoundList.propTypes = {
  pounds: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PoundList;
