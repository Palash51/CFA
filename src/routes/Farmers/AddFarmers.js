import React from 'react';
import {
    Button,
    Sidesheet,
    ModalDescription,
    Text
  } from "@innovaccer/design-system";


const AddFarmers = () => {
    const [open, setOpen] = React.useState(true);

  const onClose = () => {
    setOpen(!open);
  };

  const backIconCallback = (e) => {
    console.log('back icon clicked');
  }

  const headerOptions = {
    backIconCallback,
    backIcon: true,
    heading: 'Add farmer details',
    // subHeading: 'Subheading'
  };

  const options = {
    onClose,
    open,
		headerOptions,
		stickFooter: true,
    footer: (
      <>
        <Button appearance="primary" className="mr-4">Primary</Button>
        <Button appearance="basic">Basic</Button>
      </>
    )
  };

  const modalDescriptionOptions = {
    title: 'Description Title',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
    removePadding: true
  };

  const modalDescriptionOptionsWithoutTitle = {
    description: 'Card Sections include supporting text like an article summary or a restaurant description.',
    removePadding: true
  };

  return (
    <div>
      <Sidesheet {...options} >
        <Text>Modal Body</Text>
        <ModalDescription {...modalDescriptionOptions} />
        <ModalDescription {...modalDescriptionOptionsWithoutTitle} />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
				Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
				Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
				Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
      </Sidesheet>
    </div>
  );

}

export default AddFarmers;