import React from "react";

import {
  Card,
  Table,
  Icon,
  GridCell,
  Pagination,
  PageHeader,
  Text,
  Button,
  ProgressBar
} from "@innovaccer/design-system";

import styled from 'styled-components';
import FarmerDetails from "./FarmerDetails";

const TableWrapper = styled.div`
  
`;


function Farmers() {
    const data = [
        {
            "firstName": "Brooke",
            "lastName": "Heeran",
            "email": "bheeran0@altervista.org",
            "gender": "Female"
        },
        {
            "firstName": "Frazer",
            "lastName": "Cathro",
            "email": "fcathro1@ucla.edu",
            "gender": "Male"
        },
        {
            "firstName": "Lemmie",
            "lastName": "Ciric",
            "email": {
                "title": "lciric2@dmoz.org",
                "metaList": [
                    "First",
                    "Second"
                ]
            },
            "gender": "Male"
        },
        {
            "firstName": "Randy",
            "lastName": "Boatwright",
            "email": "rboatwright3@arstechnica.com",
            "gender": "Male"
        },
        {
            "firstName": "Rolando",
            "lastName": "Cyples",
            "email": "rcyples4@biglobe.ne.jp",
            "gender": "Male"
        },
        {
            "firstName": "Lem",
            "lastName": "Males",
            "email": "lmales5@admin.ch",
            "gender": "Male"
        },
        {
            "firstName": "Sayres",
            "lastName": "Adelberg",
            "email": "sadelberg6@uol.com.br",
            "gender": "Male"
        },
        {
            "firstName": "Murray",
            "lastName": "Bravington",
            "email": "mbravington7@drupal.org",
            "gender": "Male"
        },
        {
            "firstName": "Jena",
            "lastName": "Swatheridge",
            "email": "jswatheridge8@npr.org",
            "gender": "Female"
        },
        {
          "firstName": "Lem",
          "lastName": "Males",
          "email": "lmales5@admin.ch",
          "gender": "Male"
      },
      {
          "firstName": "Sayres",
          "lastName": "Adelberg",
          "email": "sadelberg6@uol.com.br",
          "gender": "Male"
      },
      {
          "firstName": "Murray",
          "lastName": "Bravington",
          "email": "mbravington7@drupal.org",
          "gender": "Male"
      },
      {
          "firstName": "Jena",
          "lastName": "Swatheridge",
          "email": "jswatheridge8@npr.org",
          "gender": "Female"
      }
    ];
    
      const schema = [
        {
          name: 'name',
          displayName: 'Name',
          width: '20%',
          sorting: false,
          // resizable: true,
          // separator: true,
          tooltip: true,
          translate: a => ({
            title: `${a.firstName} ${a.lastName}`,
            firstName: a.firstName,
            lastName: a.lastName
          }),
          cellType: 'AVATAR_WITH_TEXT',
        },
        {
          name: 'email',
          displayName: 'Email',
          width: '20%',
          resizable: true,
          sorting: false,
          cellType: 'WITH_META_LIST'
        },
        {
          name: 'gender',
          displayName: 'Gender',
          width: '15%',
          // resizable: true,
          sorting: false,
          comparator: (a, b) => a.gender.localeCompare(b.gender),
          cellType: 'STATUS_HINT',
          translate: a => ({
            title: a.gender,
            statusAppearance: (a.gender === 'Female') ? 'alert' : 'success'
          }),
        },
        {
          name: 'icon',
          displayName: 'Icon',
          width: '15%',
          resizable: true,
          align: 'left',
          sorting: false,
          cellType: 'ICON',
          translate: _ => ({
            icon: 'events'
          })
        },
        {
          name: 'email',
          displayName: 'Timeline',
          width: '30%',
          resizable: true,
          // separator: true,
          cellType: 'WITH_META_LIST',
          sorting: false,
          cellRenderer: (props) => {
            return(
              <>
                <div className="w-75">
                  <ProgressBar max={100} value={40} />
                </div>
                {/* <GridCell {...props} /> */}
              </>
            )
          }
        },
      ];
    
      const loaderSchema = [
        {
            "name": "name",
            "displayName": "Name",
            // "width": "40%",
            // "resizable": true,
            "tooltip": true,
            // "separator": true,
            "cellType": "AVATAR_WITH_TEXT"
        },
        {
            "name": "email",
            "displayName": "Email",
            // "width": 250,
            "resizable": true,
            "sorting": false,
            "cellType": "WITH_META_LIST"
        },
        {
            "name": "gender",
            "displayName": "Gender",
            // "width": 180,
            "resizable": true,
            "cellType": "STATUS_HINT",
            "filters": [
                {
                    "label": "Male",
                    "value": "male"
                },
                {
                    "label": "Female",
                    "value": "female"
                }
            ]
        },
        {
            "name": "icon",
            "displayName": "Icon",
            // "width": 100,
            "resizable": true,
            "align": "center",
            "cellType": "ICON"
        },
        {
            "name": "progress",
            "displayName": "Timeline",
            // "width": 200,
            "resizable": true,
            "cellType": "WITH_META_LIST"
        }
    ];

    const options = {
      title:"All Farmers",
      actions: (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: 20 }}>
          <Button appearance="primary">Add Farmer</Button>
         </div>
      )
    };

    const [farmerDetails, openFarmerDetails] = React.useState(false);

    const showFarmerDetails = (userInfo) => {
      openFarmerDetails(true)
    }
    
      return (
        <>
        {!farmerDetails && (
        <>
        <div className="w-100 p-1">
            <PageHeader
            separator={false}
            {...options}
            />
        </div>
        <div className="flex-grow-1 overflow-hidden p-1" style={{height:0, width:1220, overflowX:'hidden', marginBottom: 48}}>
        <div className="h-100 d-flex flex-column overflow-hidden">
          <Card className="m-6 bg-light flex-grow-1 overflow-hidden d-flex flex-column"
            shadow="light" >
            <div style={{height: '90%'}}>
            <Table
              className="flex-grow-1 overflow-hidden"
              loaderSchema={loaderSchema}
              withCheckbox={false}
              type="resource"
              showHead={true}
              showMenu={false}
              data={data}
              schema={schema}
              draggable={false}
              multipleSorting={false}
              withHeader
              headerOptions={{
                withSearch: true,
                dynamicColumn: false
              }}        
              onRowClick={userInfo => {
                showFarmerDetails(userInfo);
              }}      
              onSearch={(currData, searchTerm) => {
                return currData.filter(d =>
                  d.firstName.toLowerCase().match(searchTerm.toLowerCase())
                  || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
                );
              }}
            //   withCheckbox={true}
              onSelect={(rowIndex, selected, selectedList, selectAll) => console.log(`on-select:- rowIndex: ${rowIndex} selected: ${selected} selectedList: ${JSON.stringify(selectedList)} selectAll: ${selectAll}`)}
              withPagination={false}
              pageSize={10}
              // onPageChange={newPage => console.log(`on-page-change:- ${newPage}`)}
            />
            </div>
            <div>
            <Pagination
                  type="jump"
                  className="py-4 justify-content-center"
                  // page={page}
                  // totalPages={totalPageCount}
                  // onPageChange={this.onPageChange}
                />
              </div>
          </Card>
        </div>
        </div>
        </>
        )}
        {farmerDetails && (
          <FarmerDetails />
        )}
      </>
      );
    };
    

export default Farmers;