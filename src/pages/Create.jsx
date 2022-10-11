import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { db } from "../helpers/DB";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  const [lvl, setLvl] = useState("");

  const nav = useNavigate();

  const challengeDetail = {
    name,
    start,
    end,
    description,
    img,
    lvl,
    id: "",
    status : function() {
           
      if (new Date(this.end) > new Date() && new Date(this.start) < new Date()) {
          return 'Active'
      }
      if ( new Date(this.end) > new Date() && new Date(this.start) > new Date()) {
          return "Upcoming"
      }
      if (new Date(result.end) < new Date() && new Date(result.start) > new Date()) {
          return "Past"
      }
      return "lol"
  
  }
  };

  const createChallenge = async (event) => {
    event.preventDefault()
    challengeDetail.id = await uuidv4();
    await db.push(challengeDetail);
    await nav("/");
  };

  return (
    <>
      <div className="bg-[#F8F9FD] ">
        <div className="mb-8 py-10 max-w-screen-xl mx-auto ">
          <h2 className="text-2xl font-bold">Challenge Details</h2>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <form onSubmit={e => createChallenge(e)} className="md:w-1/2  py-8">
          <div className="flex flex-col mb-8">
            <label className="mb-5 font-medium text-base" htmlFor="">
              Challenge Name
            </label>
            <input
             required
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="w-2/3 p-2 border border-[#B7B7B7] rounded-md "
            />
          </div>

          <div className="flex flex-col mb-8">
            <label className="mb-5 font-medium text-base" htmlFor="">
              Start Date
            </label>
            <input
              required
              type="date"
              onChange={(e) => setStart(e.target.value)}
              className="w-2/3 p-2 border border-[#B7B7B7] rounded-md"
            />
          </div>

          <div className="flex flex-col mb-8">
            <label className="mb-5 font-medium text-base" htmlFor="">
              End Date
            </label>
            <input
             required
              type="date"
              onChange={(e) => setEnd(e.target.value)}
              className="w-2/3 p-2 border border-[#B7B7B7] rounded-md"
            />
          </div>

          <div className="flex flex-col mb-8">
            <label className="mb-5 font-medium text-base" htmlFor="">
              Description
            </label>
            <textarea
             required
              name=""
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-60 p-2 border border-[#B7B7B7] rounded-md"
            />
          </div>

          <div className="flex flex-col mb-8">
            <label className="mb-5 font-medium text-base" htmlFor="">
              Image
            </label>
            {img && (
              <img
                src={img ? URL.createObjectURL(img) : ""}
                alt="Thumb"
                className="w-40 h-auto p-2 my-4 border"
              />
            )}
            <input
             required
              type="file"
              onChange={(e) => setImg(e.target.files[0])}
              className="w-2/3 p-2 border border-[#B7B7B7] rounded-md "
            />
          </div>

          <div className="flex flex-col mb-14">
            <label className="mb-5 font-medium text-base" htmlFor="">
              Level Type
            </label>

            <select
             required
              name=""
              id=""
              onChange={(e) => setLvl(e.target.value)}
              className="w-2/3 p-2 border border-[#B7B7B7] rounded-md"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <button
            type="submit"
            // onClick={(e) => createChallenge(e)}
            className="bg-[#44924C] px-8 py-2 text-white rounded-md"
          >
            Create Challenge
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
