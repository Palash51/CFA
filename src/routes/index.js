import React from "react";
import styled from "styled-components";

import {
  Row,
  Column,
  PageHeader,
  Navigation,
  Avatar,
} from "@innovaccer/design-system";
import Farmers from "./Farmers";

function Home() {
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
          name: "analytics.care_plans",
          label: "Plans",
        },
      ],
    },
    {
      name: "claims",
      label: "Claims",
      icon: "receipt",
    },
    {
      name: "manula_entry",
      label: "Contract Form",
      icon: "border_color",
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

  const onClickHandler = (menu) => {
    console.log("menu-clicked: ", menu);
    setActive(menu);
  };

  return (
    <>
      <div className="w-10 h-25 p-2 bg-light" style={{ background: "#f4f4f4" }}>
        <PageHeader {...options} separator={false} />
      </div>
      <Row className="vh-100 bg-secondary-lightest">
        <div className="d-flex bg-secondary-lighter w-100">
          <Navigation
            type="vertical"
            menus={data}
            expanded={expanded}
            footer={true}
            onToggle={(val) => setExpanded(val)}
            active={active}
            onClick={onClickHandler}
          />
          <div class="h-100 w-100 d-flex flex-column">
            <div>
              <PageHeader title={active.label} separator={false} />
            </div>
            <div className="flex-grow-1 overflow-hidden p-1" style={{height:0, width:1200, overflowX:'hidden', marginBottom: 44}}>
              {/* {active.name === 'farmers' && (    
                        <Farmers />
                    )} */}
              <Farmers />
            </div>
          </div>
        </div>
      </Row>
    </>
  );
}

export default Home;
