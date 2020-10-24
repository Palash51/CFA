import React from "react";

import { Card , Button, Text, Tooltip} from "@innovaccer/design-system";

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
              <div
                style={{
                  display: "flex",
                //   flex: "1 1 0%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 16,
                  marginBottom: 20
                }}
              >
                <div as="h5" style={{display: 'block', fontSize: 16, fontWeight: 700 }}>
                  Contact Details
                </div>
                <div className="h-50">
                    <Button appearance="basic" icon="edit" size="tiny" />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flex: "1 1 0%",
                  flexDirection: "row",
                  padding: 16,
                  borderBottom: '1px solid #c5c5c5',
                }}
              >
                <div as="h5" style={{display: 'block', fontSize: 16, fontWeight: 700 }}>
                  Phone Numbers
                </div>
                <div className="h-50">
                    1234567890
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flex: "1 1 0%",
                  flexDirection: "row",
                  padding: 16,
                  borderBottom: '1px solid #c5c5c5'
                }}
              >
                <div as="h5" style={{display: 'block', fontSize: 16, fontWeight: 700 }}>
                  Phone Numbers
                </div>
                <div className="h-50">
                    1234567890
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flex: "1 1 0%",
                  flexDirection: "row",
                  padding: 16,
                  borderBottom: '1px solid #c5c5c5'
                }}
              >
                <div as="h5" style={{display: 'block', fontSize: 16, fontWeight: 700 }}>
                  Phone Numbers
                </div>
                <div className="h-50">
                    1234567890
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flex: "1 1 0%",
                  flexDirection: "row",
                  padding: 16,
                  borderBottom: '1px solid #c5c5c5'
                }}
              >
                <div as="h5" style={{display: 'block', fontSize: 16, fontWeight: 700 }}>
                  Phone Numbers
                </div>
                <div className="h-50">
                    1234567890
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div style={{padding: 16}}>
            Assignee
            <Button appearance="basic" size="regular" style={{border:'1px solid #c5c5c5', fontSize: 13, boxSizing: 'revert', marginTop: 2}}>
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
