"use client";
import React from "react";
import "./index.css";

import {
  Card,
  Button,
  Text,
  Tooltip,
  Icon,
  Column,
  HorizontalNav,
  PageHeader,
  Row,
} from "@innovaccer/design-system";

function PersonalDetails({ params }: { params: { slug: string } }) {
  const navigationData = [
    {
      name: "menu_1",
      label: "Personal Details",
    },
    {
      name: "menu_2",
      label: "Linked Activities",
    },
  ];
  const [active, setActive] = React.useState({
    name: "menu_1",
  });

  const onClickHandler = (menu: any) => {
    setActive(menu);
  };
  const navigation = (
    <HorizontalNav
      menus={navigationData}
      onClick={onClickHandler}
      active={active}
    />
  );
  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <Button appearance="alert">Deactivate</Button>
    </div>
  );

  return (
    <>
      <div className="flex flex-row justify-center w-full">
        <div className="p-5 w-[900px] h-auto">
          <Row
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            css={undefined}
          >
            <Column>
              <div className="w-[135%]">
                <PageHeader
                  title="Farmer Details"
                  separator={false}
                  navigation={navigation}
                  actions={actions}
                />
              </div>
            </Column>
          </Row>
          <div className="ml-20 mt-10">
            <Card className=" w-100 bg-light" shadow="light">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="Contact-detail-heading">
                  <h5
                    style={{ display: "block", fontSize: 16, fontWeight: 700 }}
                  >
                    Contact Details
                  </h5>
                  <div className="h-50">
                    <Button appearance="basic" icon="edit" size="tiny" />
                  </div>
                </div>
                <div className="Contact-info">
                  <Icon name="call" />
                  <h5 className="w-50 ml-4">Phone Numbers</h5>
                  <div className="h-50">1234567890</div>
                </div>
                <div className="Contact-info">
                  <Icon name="place" />
                  <h5 className="w-50 ml-4">Address</h5>
                  <div className="h-50">1234567890</div>
                </div>
                <div className="Contact-info">
                  <Icon name="email" />
                  <h5 className="w-50 ml-4">Email Address</h5>
                  <div className="h-50">1234567890</div>
                </div>
                <div className="Contact-info">
                  <Icon name="healing" />
                  <h5 className="w-50 ml-4">Emergency Contact</h5>
                  <div className="h-50">1234567890</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="flex flex-col mt-32">
          Assignee Name
          <Button appearance="success" size="regular" className="Assign-button">
            Assign
          </Button>
          <div style={{ marginTop: 16 }}>
            <Text>Assigned on</Text>
          </div>
          <div>
            <Tooltip appendToBody position="bottom" tooltip="01/01/2020">
              <Text>01/01/2020</Text>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalDetails;
