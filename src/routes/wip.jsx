import React from 'react'
import {
    Row, Column, Message
  } from "@innovaccer/design-system";
import './index.css'

export default function WorkInProgress() {
    console.log("wip -=-=-=-=--=")
    return (
        
           <Row className="work-in-progress-row">
            <Column size="4">
                <Message appearance="alert" description="We are working on this awesome feature. Coming soon!!" />
            </Column>
            </Row>
    )
}
