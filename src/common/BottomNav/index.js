import React from "react";
import "./bottomnav.css";

const BottomNav = ({  displayDash, setDisplayDash }) => {
  return (
    <div
      style={{ justifyItems: "center", alignItems: "center" }}
      className="bottomNavCointanier "
    >
      <div
        onClick={() => {
          setDisplayDash(true);
        }}
        className={`${displayDash?"growwPrim":""} bottomButton`}
      >
        <DashIcon />
        <div>Dash</div>
      </div>
      <div
        onClick={() => {
          setDisplayDash(false);
        }}
        className={`${!displayDash?"growwPrim":""} bottomButton`}
      >
        <UpdateIcon />
        <div> Updates</div>
      </div>
    </div>
  );
};

const DashIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    stroke-width="3"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="css-i6dzq1"
  >
    <line x1="12" y1="20" x2="12" y2="10"></line>
    <line x1="18" y1="20" x2="18" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="16"></line>
  </svg>
);

const UpdateIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    stroke-width="3"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="css-i6dzq1"
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

export default BottomNav;
