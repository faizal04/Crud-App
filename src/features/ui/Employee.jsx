//employee.jsx
import { useSelector } from "react-redux";
import EmployeeItem from "../contacts/EmployeeItem";
import { useNavigate } from "react-router-dom";

function Employee() {
  // const [formIsOpen, setFormOpen] = useState(false);
  const emp = useSelector((state) => state.contacts.contacts);
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6">
      <button
        onClick={() => navigate("/employee/new")}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Add Employee
      </button>

      <div className="space-y-4">
        {emp.map((emp, index) => (
          <EmployeeItem employee={emp} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Employee;
