import React, { useEffect, useState } from "react";
import { db } from "../../helpers/DB";
import {
 
   getFilterRes,
} from "../../helpers/Filters";

const HackathonList = () => {
  const [res, setRes] = useState(db);
  const [statusFilters, setStatusFilters] = useState([]);
  console.log(statusFilters);
  const [lvlFilters, setLvlFilters] = useState([]);


  const [all, setAll] = useState(false)
  const [Active, setActive] = useState(false)
  const [Upcoming, setAUpcoming] = useState(false)
  const [Past, setPast] = useState(false)
  const [Easy, setEasy] = useState(false)
  const [Medium, setMedium] = useState(false)
  const [Hard, setHard] = useState(false)



  useEffect(() => {
   
    setRes(getFilterRes(statusFilters, lvlFilters))
   
  }, [])
 
  

  return (
    <div>
      <div className="bg-[#002A3B] py-[72px] ">
        <h2 className="text-center text-2xl font-semibold text-white mb-16">
          Explore Challenges
        </h2>
        <div className="flex justify-between max-w-screen-md mx-auto px-4">
          <input type="text " className="w-10/12 rounded-md py-2 px-4 bg-white" />

          <div className="w-2/12 relative ml-2 py-2 px-4 bg-white rounded-md">
            <button className="text-center">Filter</button>
            <div className="bg-white absolute w-56 left-0 p-4 mt-10 rounded-md">
              <div>
                <h2 className="text-gray-600 mb-4">Status</h2>
                <div>
                <input  type="checkbox" name="All" id="All" />
                <label htmlFor="All" className="ml-3 text-sm text-gray-500">All</label>
                </div>

                <div>
                <input  type="checkbox" name="Upcoming" id="Upcoming" />
                <label htmlFor="Upcoming" className="ml-3 text-sm text-gray-500">Upcoming</label>
                </div>

                <div>
                <input type="checkbox" name="Active" id="Active" />
                <label htmlFor="Active" className="ml-3 text-sm text-gray-500">Active</label>
                </div>

                <div>
                <input type="checkbox" name="Past" id="Past" />
                <label htmlFor="Past" className="ml-3 text-sm text-gray-500">Past</label>
                </div>
             

              </div>

              <div>
                <h2 className="text-gray-600 mb-4 mt-6">Level</h2>
                <div>
                <input type="checkbox" name="Easy" id="Easy" />
                <label htmlFor="Easy" className="ml-3 text-sm text-gray-500">Easy</label>
                </div>

                <div>
                <input type="checkbox" name="Medium" id="Medium" />
                <label htmlFor="Medium" className="ml-3 text-sm text-gray-500">Medium</label>
                </div>

                <div>
                <input type="checkbox" name="Hard" id="Hard" />
                <label htmlFor="Hard" className="ml-3 text-sm text-gray-500">Hard</label>
                </div>

               
             

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonList;
