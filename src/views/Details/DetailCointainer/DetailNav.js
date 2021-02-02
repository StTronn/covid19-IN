import React from "react";
import {useHistory} from "react-router-dom"
import {SECTION_PATH} from './detailConst'

import routes from "../../../router/webRoutes"

const DetailNav = ({ selected, sections }) => {
  const history = useHistory();
  return (
    <div className="menuWrapperDetails card clrText">
      {Object.values(sections).map((section, i) => (
        <NavElements
          onClick={() => history.push(`${routes.DEFAULT_DETAIL}/${SECTION_PATH[Object.keys(sections)[i]]}`)}
          selected={selected}
          sectionPath={SECTION_PATH[Object.keys(sections)[i]]}
          section={section}
          key={i}
        />
      ))}
    </div>
  );
};

const NavElements = ({ selected, section,sectionPath ,onClick }) => {
  const className = calculateClass(selected === sectionPath);
  return (
    <div onClick={onClick} className={className}>
      {section}
    </div>
  );
};

const calculateClass = (select) => {
  const selectedClass = "menuItemSelectedDetails";
  const baseClassName = "menuItemDetails";
  const appliedClassName = select
    ? `${baseClassName} ${selectedClass}`
    : `${baseClassName}`;
  return appliedClassName;
};

export default DetailNav;
