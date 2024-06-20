"use client";
import React, { useState } from "react";
import {
  Card,
  Table,
  Pagination,
  PageHeader,
  Button,
  ProgressBar,
} from "@innovaccer/design-system";
import { farmers } from "@/utils/farmerSampleData";
import AddFarmers from "@/components/farmers/AddFarmers";
import { useRouter } from "next/navigation";

const Farmers: React.FC<{}> = () => {
  const router = useRouter();
  const schema: any = [
    {
      name: "name",
      displayName: "Name",
      width: "20%",
      sorting: false,
      // resizable: true,
      // separator: true,
      tooltip: true,
      translate: (a: any) => ({
        title: `${a.firstName} ${a.lastName}`,
        firstName: a.firstName,
        lastName: a.lastName,
      }),
      cellType: "AVATAR_WITH_TEXT",
    },
    {
      name: "email",
      displayName: "Email",
      width: "20%",
      resizable: true,
      sorting: false,
      cellType: "WITH_META_LIST",
    },
    {
      name: "gender",
      displayName: "Gender",
      width: "15%",
      // resizable: true,
      sorting: false,
      comparator: (a: any, b: any) => a.gender.localeCompare(b.gender),
      cellType: "STATUS_HINT",
      translate: (a: any) => ({
        title: a.gender,
        statusAppearance: a.gender === "Female" ? "alert" : "success",
      }),
    },
    {
      name: "status",
      displayName: "Status",
      width: "15%",
      resizable: true,
      align: "left",
      sorting: false,
      cellRenderer: (props: any) => {
        return (
          <>
            <div>Active</div>
          </>
        );
      },
    },
    {
      name: "email",
      displayName: "Timeline",
      width: "30%",
      resizable: true,
      // separator: true,
      cellType: "WITH_META_LIST",
      sorting: false,
      cellRenderer: (props: any) => {
        return (
          <>
            <div className="w-75">
              <ProgressBar max={100} value={40} />
            </div>
            {/* <GridCell {...props} /> */}
          </>
        );
      },
    },
  ];

  const loaderSchema: any = [
    {
      name: "name",
      displayName: "Name",
      // "width": "40%",
      // "resizable": true,
      tooltip: true,
      // "separator": true,
      cellType: "AVATAR_WITH_TEXT",
    },
    {
      name: "email",
      displayName: "Email",
      // "width": 250,
      resizable: true,
      sorting: false,
      cellType: "WITH_META_LIST",
    },
    {
      name: "gender",
      displayName: "Gender",
      // "width": 180,
      resizable: true,
      cellType: "STATUS_HINT",
      filters: [
        {
          label: "Male",
          value: "male",
        },
        {
          label: "Female",
          value: "female",
        },
      ],
    },
    {
      name: "status",
      displayName: "Status",
      // "width": 100,
      resizable: true,
      align: "center",
    },
    {
      name: "progress",
      displayName: "Timeline",
      // "width": 200,
      resizable: true,
      cellType: "WITH_META_LIST",
    },
  ];

  const [farmerDetails, openFarmerDetails] = useState(false);
  const [addFarmerSheet, setAddFarmerSheet] = useState(false);

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

  const showFarmerDetails = (userInfo: any) => {
    // debugger
    openFarmerDetails(true);
    router.push(`/farmers/${userInfo.firstName}`);
  };

  const goToFarmersList = () => {
    openFarmerDetails(false);
  };

  return (
    <>
      {!farmerDetails && (
        <>
          <div className="w-100 p-1">
            <PageHeader separator={false} {...options} />
          </div>
          {addFarmerSheet && <AddFarmers />}
          <div
            className="flex-grow-1 overflow-hidden p-1"
            style={{
              width: 1220,
              overflowX: "hidden",
              // marginBottom: 48,
            }}
          >
            <div className="h-full d-flex flex-column overflow-hidden">
              <Card
                className="m-6 bg-light flex-grow-1 overflow-hidden d-flex flex-column h-[40.5rem]"
                shadow="light"
              >
                <div style={{ height: "90%" }}>
                  <Table
                    className="flex-grow-1 overflow-hidden"
                    loaderSchema={loaderSchema}
                    withCheckbox={false}
                    type="resource"
                    showHead={true}
                    showMenu={false}
                    data={farmers}
                    schema={schema}
                    draggable={false}
                    multipleSorting={false}
                    withHeader
                    headerOptions={{
                      withSearch: true,
                      dynamicColumn: false,
                    }}
                    onRowClick={(userInfo) => {
                      showFarmerDetails(userInfo);
                    }}
                    onSearch={(currData, searchTerm) => {
                      return currData.filter(
                        (d) =>
                          d.firstName
                            .toLowerCase()
                            .match(searchTerm.toLowerCase()) ||
                          d.lastName
                            .toLowerCase()
                            .match(searchTerm.toLowerCase())
                      );
                    }}
                    //   withCheckbox={true}
                    onSelect={(rowIndex, selected, selectedList, selectAll) =>
                      console.log(
                        `on-select:- rowIndex: ${rowIndex} selected: ${selected} selectedList: ${JSON.stringify(
                          selectedList
                        )} selectAll: ${selectAll}`
                      )
                    }
                    withPagination={false}
                    pageSize={10}
                    // onPageChange={newPage => console.log(`on-page-change:- ${newPage}`)}
                  />
                </div>
                <div>
                  <Pagination
                    type="jump"
                    className="py-4 justify-content-center"
                    page={1}
                    totalPages={2}
                    onPageChange={(currentPage) =>
                      console.log("current page", currentPage)
                    }
                  />
                </div>
              </Card>
            </div>
          </div>
        </>
      )}
      {/* {farmerDetails && <FarmerDetails goToFarmersList={goToFarmersList} />} */}
    </>
  );
};

export default Farmers;
