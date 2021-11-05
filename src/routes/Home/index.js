import React from "react";
import { useHistory } from 'react-router-dom';
import {
  Row,
  Column,
  PageHeader,
  Navigation,
  Avatar,
} from "@innovaccer/design-system";
import Farmers from '../Farmers'
import Company from '../Company';
import WorkInProgress from '../wip'


function Home(props) {
  const title = "CFA";
  const options = {
    title,
    actions: (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {/* <span className="mr-4"><Text appearance="subtle">Meta data</Text></span> */}
        {/* <Button appearance="primary">Primary</Button> */}
        <Avatar
          firstName="CFA"
          lastName="F"
          size="regular"
          tooltipPosition="bottom"
          withTooltip
        />
      </div>
    ),
  };

  const data = [
    {
      name: "company_360",
      label: "Company 360",
      icon: "assignment_ind",
      link: "/",
    },
    {
      name: "farmers",
      label: "All Farmers",
      icon: "forum",
      link: "/farmers",
    },

    {
      name: "analytics",
      label: "Analytics",
      icon: "favorite",
      link: "/timeline",
      subMenu: [
        {
          name: "timeline",
          label: "Timeline",
          link: "/timeline",
        },
        {
          name: "stats",
          label: "Stats",
          link: "/stats",
        },
        {
          name: "plans",
          label: "Plans",
          link: "/plans",
        },
      ],
    },
    {
      name: "inventory",
      label: "Inventory",
      icon: "local_mall",
      link: "/inventory",
    },
    {
      name: "form",
      label: "Contract Form",
      icon: "border_color",
      link: "/form",
    },
    {
      name: "claims",
      label: "Claims",
      icon: "receipt",
      link: "/claims",
    },
    {
      name: "documents",
      label: "Documents",
      icon: "assignment",
      link: "/documents",
    },
    {
      name: "profile",
      label: "Profile",
      icon: "account_circle",
      link: "/profile",
    },
  ];

  const [active, setActive] = React.useState({
    name: "dashboard",
    label: "Company 360",
  });
  const [expanded, setExpanded] = React.useState(true);
  

  const history = useHistory();


  const onClickHandler = (menu) => {
    // console.log("menu-clicked: ", menu);
    setActive(menu);
    
    history.push(menu.link);
  };

  
  console.log("active.name", active.name)
  return (
    <>
      <div className="w-10 h-25 p-2 bg-light" style={{ background: "#f4f4f4", borderBottom: '1px ridge #d5d5d5'}}>
        <PageHeader {...options} separator={false} />
      </div>
      <Row className="vh-100 bg-secondary-lightest">
        <div className="d-flex bg-secondary-lighter w-100">
          <Navigation
            className="bg-light"
            type="vertical"
            menus={data}
            expanded={expanded}
            footer={true}
            onToggle={(val) => setExpanded(val)}
            active={active}
            onClick={onClickHandler}
            key={active.name}
          />
          {active.name === 'farmers' && ( 
          <div class="h-100 w-100 d-flex flex-column">
            <Farmers />
          </div>
          )}
          {(active.name === 'company_360' || active.name === 'dashboard' ) && (
            <div class="h-100 w-100 d-flex flex-column">
            <Company />
          </div>
          )}
          {/* TODO : update when all the routes are avaivlable */}
          {(active.name === 'inventory' || active.name === 'timeline' || active.name === 'stats'
          || active.name === 'plans' || active.name === 'manula_entry' || active.name === 'claims'
          || active.name === 'documents' || active.name === 'profile')
          &&
            <div class="h-100 w-100 d-flex flex-column">
              <WorkInProgress />
              </div>
          }
        </div>
      </Row>
    </>
  );
}

export default Home;
