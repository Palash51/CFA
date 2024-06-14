"use client";
import React from "react";
import {
  Avatar,
  PageHeader,
  Collapsible,
  VerticalNav,
} from "@innovaccer/design-system";
import "@innovaccer/design-system/css";
function Sidebar() {
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
      link: "/farmers/farmerList",
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
    name: "company_360",
    label: "Company 360",
  });
  const [expanded, setExpanded] = React.useState(true);

  const onClickHandler = (menu: any) => {
    console.log("menu-clicked: ", typeof menu);
    setActive(menu);
  };

  return (
    <>
      <div className="vh-100 bg-secondary-lightest d-flex bg-secondary-lighter">
        <Collapsible
          expanded={expanded}
          onToggle={setExpanded}
          hoverable={false}
        >
          <VerticalNav
            menus={data}
            active={active}
            expanded={expanded}
            onClick={onClickHandler}
          />
        </Collapsible>
      </div>
    </>
  );
}

export default Sidebar;
