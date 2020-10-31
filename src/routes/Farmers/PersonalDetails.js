import React from "react";
import './index.css';

import { Card , Button, Text, Tooltip, Icon} from "@innovaccer/design-system";

function PersonalDetails() {
  return (
    <>
      <div style={{display: 'flex', flexDirection:'row', justifyContent: 'center'}}>
        <div
          className="p-5"
          style={{
            width: "900px",
            height: "288px"
          }}
        >
          <Card className="h-100 w-100 bg-light" shadow="light">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="Contact-detail-heading">
                <div as="h5" style={{display: 'block', fontSize: 16, fontWeight: 700 }}>
                  Contact Details
                </div>
                <div className="h-50">
                    <Button appearance="basic" icon="edit" size="tiny" />
                </div>
              </div>
              <div className="Contact-info">
              <Icon name="call"/>
                <div as="h5" className="w-50 ml-4">
                  Phone Numbers
                </div>
                <div className="h-50">
                    1234567890
                </div>
              </div>
              <div className="Contact-info">
              <Icon name="place"/>
                <div as="h5" className="w-50 ml-4">
                  Address
                </div>
                <div className="h-50">
                    1234567890
                </div>
              </div>
              <div className="Contact-info">
                <Icon name="email"/>
                <div as="h5" className="w-50 ml-4">
                Email Address
                </div>
                <div className="h-50">
                    1234567890
                </div>
              </div>
              <div className="Contact-info">
              <Icon name="healing"/>
              <div as="h5" className="w-50 ml-4">
                  Emergency Contact
                </div>
                <div className="h-50">
                    1234567890
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div style={{padding: 16}}>
            Assignee Name
            <Button appearance="basic" size="regular" className="Assign-button">
                Assign   
            </Button>
            <div style={{marginTop: 16}}>
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
