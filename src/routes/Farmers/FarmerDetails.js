import React from 'react';
import {
    Breadcrumbs,
    Navigation,
    PageHeader,
    Button,
    Badge,
    StatusHint
    
  } from "@innovaccer/design-system";
  import { useHistory } from 'react-router-dom';
import PersonalDetails from './PersonalDetails';


function FarmerDetails() {
  const history = useHistory();
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
      link: '/farmers'
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
        <Button appearance="alert">Deactivate</Button>
      </div>
    ),
    breadcrumbs: (
      <Breadcrumbs
        list={breadcrumbData}
        onClick={link => history.push('/farmers')}
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