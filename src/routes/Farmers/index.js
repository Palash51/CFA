import React from "react";
import {
  Card,
  Table,
  Icon,
  GridCell,
  Pagination
} from "@innovaccer/design-system";

import styled from 'styled-components';

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
            "firstName": "Annabel",
            "lastName": "Nelsey",
            "email": "anelsey9@google.com",
            "gender": "Female"
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
            "firstName": "Annabel",
            "lastName": "Nelsey",
            "email": "anelsey9@google.com",
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
          displayName: 'Custom Cell',
          width: '30%',
          resizable: true,
          // separator: true,
          cellType: 'WITH_META_LIST',
          sorting: false,
          cellRenderer: (props) => {
            return(
              <>
                
                <GridCell {...props} />
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
            "name": "email",
            "displayName": "Custom Cell",
            // "width": 200,
            "resizable": true,
            "cellType": "WITH_META_LIST"
        }
    ];
    
      return (
        <div className="h-100 d-flex flex-column overflow-hidden">
          <Card className="m-2 bg-light flex-grow-1 overflow-hidden d-flex flex-column"
            shadow="light" >
            <>
            <Table
              className="flex-grow-1 overflow-hidden"
              loaderSchema={loaderSchema}
              withCheckbox={false}
              showMenu={false}
              data={data}
              schema={schema}
              draggable={false}
              withHeader={true}
              headerOptions={{
                withSearch: true
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
            <Pagination
                  type="jump"
                  className="py-4 justify-content-center"
                  // page={page}
                  // totalPages={totalPageCount}
                  // onPageChange={this.onPageChange}
                />
            
            </>
          </Card>
        </div>
      );
    };
    

export default Farmers;