//Footer.jsx
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="text-center mb-4">username</div>
      <ul className="flex justify-center space-x-6">
        <li>
          <a href="/" className="hover:text-yellow-400 transition-colors">
            Home
          </a>
        </li>
        <li>
          <a
            href="/employee"
            className="hover:text-yellow-400 transition-colors"
          >
            Employee
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
