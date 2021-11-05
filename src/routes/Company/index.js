import React from 'react';
import {
    Card    
  } from "@innovaccer/design-system";
  import { useHistory } from 'react-router-dom';
  import './index.css';


function Dashboard() {
  const history = useHistory();
  console.log("company 360 page rendering")
  return (
    <>
    <div className="d-flex mt-8 ml-8">
    <div className="Card-company-dashboard">
        <Card className="Card-info" shadow="medium">
            <div className="Card-content">
            <div className="Card-heading">
              Total Customers
            </div>
            <div className="Card-body">1000</div>
          </div>
        </Card>
      </div>
      
      <div className="Card-company-dashboard">
        <Card className="Card-info" shadow="medium">
        <div className="Card-content">
            <div className="Card-heading">
              Total Customers
            </div>
            <div className="Card-body">1000</div>
          </div>
        </Card>
      </div>
      <div className="Card-company-dashboard">
        <Card className="Card-info" shadow="medium">
        <div className="Card-content">
            <div className="Card-heading">
              Total Customers
            </div>
            <div className="Card-body">1000</div>
          </div>
        </Card>
      </div>
      <div className="Card-company-dashboard">
        <Card className="Card-info" shadow="medium">
        <div className="Card-content">
            <div className="Card-heading">
              Total Customers
            </div>
            <div className="Card-body">1000</div>
          </div>
        </Card>
      </div>
    </div>
    </>
  );

}

export default Dashboard;

