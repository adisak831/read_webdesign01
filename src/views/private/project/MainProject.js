import React from "react";
//import ShowUser from "./ShowUser";
import SVGAdd from "../../../assets/svg/SVGAdd";
import SVGClockwise from "../../../assets/svg/SVGClockwise";
import SVGSearch from "../../../assets/svg/SVGSearch";
import { useHistory } from "react-router";
import ShowProject from "./ShowProject";

export default function MainProject() {
  const history = useHistory();

  return (
    <div>
      <div className="flex flex-wrap mx-auto">
        <div className="w-full pr-2 mb-2 md:w-1/2">
          <h4 className="text-blue-500">
            <strong>ข้อมูลโครงการ</strong>
          </h4>
        </div>
        <div className="w-full pr-2 mb-2 text-right md:w-1/2">
          <button className="mr-1 btn btn-green btn-sm"
          onClick={ ()=>{
            history.push("/FormProject");
          }}
          >
            {" "}
            <SVGAdd color="white" /> &nbsp;เพิ่มใหม่
          </button>
        </div>
      </div>
      <div className="mt-2 bg-white border-b border-l border-r border-gray-400"></div>

      <div className="mt-10">
        <div className="flex ">
          <div className="w-full">
            <div className="flex flex-wrap mx-auto justify-left">
              <div className="w-full pr-2 mb-2 md:w-1/4">
                <input
                  className="field-input"
                  placeholder="ค้นหาชื่อผู้ใช้งาน"
                />
              </div>
              <div className="w-full pr-2 mb-2 md:w-1/4">
                <button className="mr-1 btn btn-green btn-md">
                  {" "}
                  <SVGSearch color="white" />
                  ค้นหา
                </button>
                <button className="btn btn-gray btn-md">
                  {" "}
                  <SVGClockwise color="white" />
                  ล้างค่า
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-1">
        <ShowProject />
      </div>
    </div>
  );
}
