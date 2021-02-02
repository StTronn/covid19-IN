import React, { useEffect } from "react";
import {useParams} from "react-router-dom"

import {SECTION_PATH,SECTION_NAME} from "./detailConst";

import NotFound from "../../../views/NotFound";
import BankDetail from "./BankDetail";
import PersonalDetail from "./PersonalDetail";
import DetailNav from "./DetailNav.js";

import "./index.css";


class DetailCointainer extends React.PureComponent{

  renderSection =()=>{
    const {section} = this.props;
    switch (section) {
      case SECTION_PATH.bank:
        return <BankDetail/> 
    
      case SECTION_PATH.personal:
        return <PersonalDetail/> 
    
      default:
        return <NotFound/>
    } 
  }

  render(){
    const {section} = this.props;
    return(
    <div className="cointainerDetails">
      <div className="leftCointainerDetails">
        <div className="fadeInUpDetailsDelay">
          <div className="gridDetails">
            <DetailNav
              selected={section}
              sections={SECTION_NAME}
            />

            {this.renderSection()}
          </div>
        </div>
      </div>
      {/* this is only for animation */}
      <div className="imgBackgroundDetails"></div>
    </div>
    )
  }
}




const DetailCointainerHoc=(DetailCointainer)=>{
  const {section} = useParams();
  //test to make sure component is mounted once 
  useEffect(() => {
    //do heavy one time request
  }, [])

  return  <DetailCointainer section={section}/>
}

const DetailCointainerWrapper= ()=> DetailCointainerHoc(DetailCointainer);
export default DetailCointainerWrapper;
