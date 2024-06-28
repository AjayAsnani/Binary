import React from "react";
import TaskCard from "../components/TaskCard";
import StatsCard from "../components/StatsCard";
import DonationCard from "../components/DonationCard";

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      name: "Plant a tree",
      completed: true,
      impact: "High",
      image: "../../public/plant.jpeg",
    },
    {
      id: 2,
      name: "Reduce water usage",
      completed: false,
      impact: "Medium",
      image: "../../public/water.jpeg",
    },
  ];

  const donations = [
    {
      id: 1,
      amount: 50,
      date: "2024-06-20",
      image: "../../public/Donation.jpeg",
    },
    {
      id: 2,
      amount: 30,
      date: "2024-06-25",
      image: "../../public/Donation.jpeg",
    },
    // Add more donations as needed
  ];

  const completedTasks = tasks.filter((task) => task.completed).length;
  const remainingTasks = tasks.length - completedTasks;
  const totalDonations = donations.reduce(
    (acc, donation) => acc + donation.amount,
    0
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Weekly Performance
      </h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          Impact Based on Performed Tasks
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Assigned Tasks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatsCard type="total" count={tasks.length} />
          <StatsCard type="completed" count={completedTasks} />
          <StatsCard type="remaining" count={remainingTasks} />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          Donations Made Towards Sustainability
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {donations.map((donation) => (
            <DonationCard key={donation.id} donation={donation} />
          ))}
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 mt-4">
          <p className="text-lg font-bold">
            Total Donations: ${totalDonations}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
