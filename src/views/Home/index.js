import { useSelector } from "react-redux";
import {
  selectData,
  selectDataError,
  selectDataLoading,
} from "../../store/dataSlice";

import Overview from "./Overview";
import Highlights from "./Highlights";
import Table from "./Table";

import './index.css'

const Home = () => {
  const data = useSelector(selectData);
  const loading = useSelector(selectDataLoading);
  const error = useSelector(selectDataError);
  if (loading) return <div>Loading...</div>;
  if (error || !data) return <div>No data availble</div>;
   return(
       <div className="homeCointainer px-df">
           <div className="left" style={{display:"grid",rowGap:"50px"}}>
                <Overview data={data}/>
                <Highlights data={data}/>
                <Table/>
           </div>
           <div>
               Updates
           </div>
       </div>
   ) 
}

export default Home;