import React from "react";
import { useHistory } from 'react-router-dom';
import {
  Row,
  Column,
  PageHeader,
  Navigation,
  Avatar,
} from "@innovaccer/design-system";
import Farmers from "./Farmers";


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
      link: "/company360",
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
      subMenu: [
        {
          name: "analytics.timeline",
          label: "Timeline",
        },
        {
          name: "analytics.stats",
          label: "Stats",
        },
        {
          name: "analytics.care_plans",
          label: "Plans",
        },
      ],
    },
    {
      name: "inventory",
      label: "Inventory",
      icon: "local_mall",
    },
    {
      name: "manula_entry",
      label: "Contract Form",
      icon: "border_color",
    },
    {
      name: "claims",
      label: "Claims",
      icon: "receipt",
    },
    {
      name: "documents",
      label: "Documents",
      icon: "assignment",
    },
    {
      name: "profile",
      label: "Profile",
      icon: "account_circle",
    },
  ];

  const [active, setActive] = React.useState({
    name: "company_360",
    label: "Company 360",
  });
  const [expanded, setExpanded] = React.useState(true);

  const history = useHistory();


  const onClickHandler = (menu) => {
    console.log("menu-clicked: ", menu);
    setActive(menu);
    history.push('/farmers');
  };

  

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
          />
          {active.name === 'farmers' && ( 
          <div class="h-100 w-100 d-flex flex-column">
            <Farmers />
          </div>
          )}
        </div>
      </Row>
    </>
  );
}

export default Home;
