import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8 bg-[#f7f5f2]">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Project Management Tool</h1>
          <button className="btn-light">Log out</button>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Website Redesign', 'Mobile App', 'Marketing Campaign', 'Automicon'].map((project, i) => (
            <div key={i} className="bg-white p-4 rounded shadow">
              <h3 className="font-medium">{project}</h3>
              <p className="text-sm text-gray-500">3/5 tasks</p>
              <div className="w-full h-2 bg-gray-200 mt-2 rounded">
                <div className="h-full bg-green-400 w-3/5 rounded" />
              </div>
              <p className="text-xs mt-2 text-gray-400">Due date</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6">
          <div>
            <h2 className="font-semibold mb-2">Task Status</h2>
            <ul className="bg-white p-4 rounded shadow space-y-1">
              <li>• Open</li>
              <li>• In Progress</li>
              <li>• Completed</li>
              <li>• On Hold</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Upcoming Deadlines</h2>
            <ul className="bg-white p-4 rounded shadow space-y-2 text-sm">
              <li>Website Redesign - <b>Apr 25</b></li>
              <li>Marketing Campaign - <b>Apr 28</b></li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="font-semibold mb-2">Team Collaboration</h2>
          <textarea placeholder="Comment" className="w-full p-2 border rounded" />
        </div>
      </div>
    </div>
  );
}
