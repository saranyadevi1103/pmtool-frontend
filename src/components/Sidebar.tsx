import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();

  const navItems = ['Projects', 'Dashboard', 'Tasks', 'Team'];

  return (
    <div className="w-64 bg-[#e1dcf0] p-6 space-y-4">
      <h2 className="font-bold text-lg mb-6">MENU</h2>
      {navItems.map((item, index) => (
        <button key={index} className="block w-full text-left bg-white py-2 px-4 rounded hover:bg-purple-200">
          {item}
        </button>
      ))}
    </div>
  );
}
