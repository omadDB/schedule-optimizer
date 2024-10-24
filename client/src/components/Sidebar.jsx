import { NavLink } from "react-router-dom"
import {
  HiOutlineAcademicCap,
  HiOutlineBookmark,
  HiOutlineHome,
} from "react-icons/hi"
import { IoExitOutline } from "react-icons/io5"
import { RiRobot2Line } from "react-icons/ri"
import styles from "./Sidebar.module.css"

function Sidebar() {
  return (
    <div className="flex flex-col gap-8 px-5 fixed top-0 left-0 h-screen w-[15rem] py-4 border-r border-gray-200">
      <img src="/assets/logo.png" alt="Webster Logo" />
      <nav className="grow">
        <ul className="flex flex-col h-full gap-6">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? `${styles["sidebar__nav--link"]} ${styles["active"]}`
                  : styles["sidebar__nav--link"]
              }
            >
              <HiOutlineHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive
                  ? `${styles["sidebar__nav--link"]} ${styles["active"]}`
                  : styles["sidebar__nav--link"]
              }
            >
              <HiOutlineBookmark />
              <span>Courses</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/instructors"
              className={({ isActive }) =>
                isActive
                  ? `${styles["sidebar__nav--link"]} ${styles["active"]}`
                  : styles["sidebar__nav--link"]
              }
            >
              <HiOutlineAcademicCap />
              <span>Instructors</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/assistant"
              className={({ isActive }) =>
                isActive
                  ? `${styles["sidebar__nav--link"]} ${styles["active"]}`
                  : styles["sidebar__nav--link"]
              }
            >
              <RiRobot2Line />
              <span>Assistant</span>
            </NavLink>
          </li>
          <li className="pb-6 mt-auto">
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                isActive
                  ? `${styles["sidebar__nav--link"]} ${styles["active"]}`
                  : styles["sidebar__nav--link"]
              }
            >
              <IoExitOutline />
              <span>Log out</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
