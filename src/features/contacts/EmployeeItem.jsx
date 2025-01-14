import PropTypes from "prop-types";

function EmployeeItem({ employee }) {
  const { name, email, phoneNumber } = employee;

  return (
    <div className="border-b">
      <div className="flex justify-between py-2">
        <div className="flex-1">{name}</div>
        <div className="flex-1">{email}</div>
        <div className="flex-1">{phoneNumber}</div>
        <div className="flex gap-2">
          <button className="px-4 py-1 bg-blue-500 text-white rounded">
            Edit
          </button>
          <button className="px-4 py-1 bg-red-500 text-white rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

EmployeeItem.propTypes = {
  employee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
  }).isRequired,
};

export default EmployeeItem;
