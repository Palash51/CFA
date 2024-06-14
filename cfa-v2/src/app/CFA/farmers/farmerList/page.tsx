"use client";
import React, { useState } from "react";
import {
  Card,
  List,
  PageHeader,
  Button,
  Text,
  Avatar,
} from "@innovaccer/design-system";
import "@innovaccer/design-system/css";

const Farmers = () => {
  const [farmerDetails, openFarmerDetails] = useState(false);
  const [addFarmerSheet, setAddFarmerSheet] = useState(false);

  const data = [
    {
      firstName: "Brooke",
      lastName: "Heeran",
      email: "bheeran0@altervista.org",
      gender: "Female",
    },
    {
      firstName: "Frazer",
      lastName: "Cathro",
      email: "fcathro1@ucla.edu",
      gender: "Male",
    },
    {
      firstName: "Lemmie",
      lastName: "Ciric",
      email: {
        title: "lciric2@dmoz.org",
        metaList: ["First", "Second"],
      },
      gender: "Male",
    },
    {
      firstName: "Randy",
      lastName: "Boatwright",
      email: "rboatwright3@arstechnica.com",
      gender: "Male",
    },
    {
      firstName: "Rolando",
      lastName: "Cyples",
      email: "rcyples4@biglobe.ne.jp",
      gender: "Male",
    },
    {
      firstName: "Lem",
      lastName: "Males",
      email: "lmales5@admin.ch",
      gender: "Male",
    },
    {
      firstName: "Sayres",
      lastName: "Adelberg",
      email: "sadelberg6@uol.com.br",
      gender: "Male",
    },
    {
      firstName: "Murray",
      lastName: "Bravington",
      email: "mbravington7@drupal.org",
      gender: "Male",
    },
    {
      firstName: "Jena",
      lastName: "Swatheridge",
      email: "jswatheridge8@npr.org",
      gender: "Female",
    },
  ];

  const schema = [
    {
      name: "info",
      displayName: "Info",
      width: "50%",
      cellRenderer: (rowData) => {
        const { firstName, lastName, email } = rowData;
        const title = `${firstName} ${lastName}`;
        const metaList =
          typeof email === "string"
            ? [email]
            : email && email.title && email.metaList
            ? [email.title, ...email.metaList]
            : [];

        return (
          <div className="d-flex align-items-center">
            <div className="mr-2">
              <Avatar firstName={firstName} lastName={lastName} />
            </div>
            <div>
              <Text>{title}</Text>
              <Text appearance="subtle">{metaList.join(", ")}</Text>
            </div>
          </div>
        );
      },
    },
    {
      name: "gender",
      displayName: "Gender",
      width: "25%",
      cellRenderer: (rowData) => (
        <Text
          className={
            rowData.gender === "Female" ? "alert-text" : "success-text"
          }
        >
          {rowData.gender}
        </Text>
      ),
    },
    {
      name: "status",
      displayName: "Status",
      width: "25%",
      cellRenderer: () => <Text appearance="subtle">Active</Text>,
    },
  ];

  const loaderSchema = [
    {
      name: "info",
      displayName: "Info",
      cellType: "AVATAR_WITH_META_LIST",
    },
    {
      name: "gender",
      displayName: "Gender",
      cellType: "STATUS_HINT",
    },
    {
      name: "status",
      displayName: "Status",
      cellType: "STATUS_HINT",
    },
  ];

  const onClickAddFarmer = () => {
    setAddFarmerSheet(true);
  };

  const options = {
    title: "All Farmers",
    actions: (
      <div
        style={{ display: "flex", justifyContent: "flex-end", marginRight: 20 }}
      >
        <Button appearance="primary" onClick={onClickAddFarmer}>
          Add Farmer
        </Button>
      </div>
    ),
  };

  const showFarmerDetails = (userInfo) => {
    console.log("Farmer Details Clicked:", userInfo);
    openFarmerDetails(true);
  };

  const goToFarmersList = () => {
    openFarmerDetails(false);
  };

  return (
    <>
      {!farmerDetails ? (
        <>
          <div className="w-100 p-1">
            <PageHeader separator={false} {...options} />
          </div>
          <div
            className="flex-grow-1 overflow-hidden p-1"
            style={{
              height: 0,
              width: 1220,
              overflowX: "hidden",
              marginBottom: 48,
            }}
          >
            <div className="h-100 d-flex flex-column overflow-hidden">
              <Card
                className="m-6 bg-light flex-grow-1 overflow-hidden d-flex flex-column"
                shadow="light"
              >
                <div style={{ height: "90%" }}>
                  <List
                    className="flex-grow-1 overflow-hidden"
                    loaderSchema={loaderSchema}
                    data={data}
                    schema={schema}
                    withHeader
                    headerOptions={{
                      withSearch: true,
                      dynamicColumn: false,
                    }}
                    onRowClick={(userInfo, rowIndex) => {
                      showFarmerDetails(userInfo);
                    }}
                    onSearch={(currData, searchTerm) => {
                      return currData.filter(
                        (d) =>
                          d.firstName
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                          d.lastName
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                      );
                    }}
                    withPagination={false}
                    pageSize={10}
                  />
                </div>
              </Card>
            </div>
          </div>
        </>
      ) : (
        <div>
          <Button onClick={goToFarmersList}>Back to Farmers List</Button>
        </div>
      )}
    </>
  );
};

export default Farmers;
