"use client";
import { Avatar, PageHeader } from "@innovaccer/design-system";
import React from "react";

const Header = () => {
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
  return (
    <div>
      <div
        className="w-full h-25 bg-light"
        style={{ background: "#f4f4f4", borderBottom: "1px ridge #d5d5d5" }}
      >
        <PageHeader {...options} separator={false} />
      </div>
    </div>
  );
};

export default Header;
