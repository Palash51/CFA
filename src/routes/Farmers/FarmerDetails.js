import React from 'react';
import {
    Breadcrumbs,
    Navigation,
    PageHeader,
    Button,
    Badge,
    StatusHint
    
  } from "@innovaccer/design-system";
import PersonalDetails from './PersonalDetails';


function FarmerDetails() {
    const navigationPosition = 'center';

  const title = 'Farmer Details';

  const navigationData = [
    {
      name: 'personal_details',
      label: 'Personal details',
      icon: 'event',
    },
    {
      name: 'linked_activities',
      label: 'Linked activities'
    }
  ];

  const breadcrumbData = [
    {
      label: 'All farmers',
      link: '/level0'
    },
    {
      label: 'Test',
      link: '/level1'
    }
  ];

  const [active, setActive] = React.useState({
    name: "personal_details",
    label: "Personal details",
  });
  const [expanded, setExpanded] = React.useState(true);

  const navigateMenu = (menu) => {
    console.log("menu-clicked: ", menu);
    setActive(menu);
  };



  const options = {
    navigationPosition,
    title,
    navigation: <Navigation menus={navigationData} onClick={menu => navigateMenu(menu)} active={active} />,
    actions: (
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Button appearance="primary">Primary</Button>
      </div>
    ),
    breadcrumbs: (
      <Breadcrumbs
        list={breadcrumbData}
        onClick={link => console.log(link)}
      />
    ),
    badge: (
      <Badge appearance="success">Active</Badge>
    ),
    // status: (
    //   <StatusHint appearance="success">Active</StatusHint>
    // ),
    // meta: (
    //   <StatusHint appearance="default">Meta Data</StatusHint>
    // )
  };
  return (
    <>
    <div className="w-100 p-1">
      <PageHeader {...options} separator={false} />
    </div>
    <div>
        {active.name === "personal_details" && (
            <PersonalDetails />
        )}
    </div>
    </>
  );

}

export default FarmerDetails;