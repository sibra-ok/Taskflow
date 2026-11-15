function DashboardPreview() {
  const tasks = [
    { name: "Complete project proposal", status: "In Progress" },
    { name: "Review monthly expenses", status: "Completed" },
    { name: "Prepare presentation", status: "Pending" },
  ]

  return (
    <div className="w-full max-w-lg rounded-xl border border-gray-200 bg-white p-5 shadow-lg">
     <div className="mb-6 flex items-center justify-between">
    <div>
    <h3 className="text-lg font-semibold text-gray-900">
    My Workspace
    </h3>
    <p className="text-sm text-gray-500">
     Here's your task overview
    </p>
    </div>

     <span className="rounded-md bg-blue-50 px-3 py-1 text-sm text-blue-600">
    This Week
   </span>
    </div>

    <div className="mb-6 grid grid-cols-3 gap-3">
    <div className="rounded-lg bg-blue-50 p-3">
    <p className="text-sm text-gray-600">Total</p>
    <p className="mt-1 text-2xl font-semibold text-gray-900">12</p>
    </div>

    <div className="rounded-lg bg-green-50 p-3">
    <p className="text-sm text-gray-600">Completed</p>
    <p className="mt-1 text-2xl font-semibold text-gray-900">08</p>
    </div>

   <div className="rounded-lg bg-orange-50 p-3">
    <p className="text-sm text-gray-600">Pending</p>
    <p className="mt-1 text-2xl font-semibold
     text-gray-900">04</p>
    </div>
    </div>

    <div>
    <h4 className="mb-3 font-semibold text-gray-800">
        Recent Tasks
    </h4>

    <div className="space-y-3">
    {tasks.map((task, index) => (
    <div
    key={index}
   className="flex items-center justify-between
   gap-3 border-b border-gray-100 pb-3">
 <p className="text-sm text-gray-700">{task.name}</p>

    <span
    className={`shrink-0 rounded-full px-2 py-1 text-xs ${
     task.status === "Completed"
    ? "bg-green-50 text-green-700"
    : task.status === "In Progress"
    ? "bg-blue-50 text-blue-700"
    : "bg-orange-50 text-orange-700"}`} >
    {task.status}
    </span>
     </div>
    ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardPreview