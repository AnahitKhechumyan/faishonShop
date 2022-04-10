import React from "react";
import { Tab } from "semantic-ui-react";
 
import PendingTable from "../dataTable/PendingTable";


const Tabs = ({pendingProducts, allProducts, changeStatus}) => {
  console.log(pendingProducts);
 const panes = [
   {
     menuItem: "All Products",
     render: () => <Tab.Pane>
         {/* <DataTable list = {allProducts}/> */}
         </Tab.Pane>
   
   },
   { menuItem: "Pending", render: () => <Tab.Pane>
       <PendingTable list = {pendingProducts} changeStatus = {changeStatus} />
       </Tab.Pane> },
 ];
 return (
   <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
 );
};
export default Tabs;
/*const Tabs = (pendingProducts, allProducts) => {
  const panes = [
    {
      menuItem: "All Products",
      render: () => <Tab.Pane></Tab.Pane>,
    },
    { menuItem: "Pending", render: () => <Tab.Pane><DataTable /></Tab.Pane> },
  ];
  return (
    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
  );
};
*/
//export default Tabs;