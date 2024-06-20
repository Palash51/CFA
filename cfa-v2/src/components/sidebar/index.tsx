"use client";
import React from "react";
import {
  Avatar,
  PageHeader,
  Collapsible,
  VerticalNav,
} from "@innovaccer/design-system";
import "@innovaccer/design-system/css";
import { sidebarContent } from "@/utils/sidebarRoutes";
import { useRouter } from "next/navigation";

function Sidebar() {
  const router = useRouter();
  const [active, setActive] = React.useState({
    name: "company_360",
    label: "Company 360",
  });
  const [expanded, setExpanded] = React.useState(true);

  const onClickHandler = (menu: any) => {
    router.push(menu?.link);
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
            menus={sidebarContent}
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
