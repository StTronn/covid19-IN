import Overview from "./Overview";
import Highlights from "./Highlights";
import Table from "./Table";
import './index.css'

const Home = () => {
   return(
       <div className="homeCointainer px-df">
           <div className="left" style={{display:"grid",rowGap:"50px"}}>
                <Overview/>
                <Highlights/>
                <Table/>
           </div>
           <div>
                right
           </div>
       </div>
   ) 
}

export default Home;