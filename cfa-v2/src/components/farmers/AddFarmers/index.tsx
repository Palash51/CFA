"use client";
import React from "react";
import {
  Button,
  Sidesheet,
  Input,
  Label,
  Dropdown,
  ChoiceList,
} from "@innovaccer/design-system";
import "./index.css";

const AddFarmers = () => {
  const [open, setOpen] = React.useState(true);

  const onClose = () => {
    setOpen(!open);
  };

  const backIconCallback = (e: any) => {
    console.log("back icon clicked");
  };

  const headerOptions = {
    backIconCallback,
    backIcon: true,
    heading: "Add farmer details",
    // subHeading: 'Subheading'
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", {
      firstName,
      middleName,
      lastName,
      landArea,
      contactNumber,
      lastCrop,
      cropType,
      farmingType,
      soilType,
      landAddress,
    });
  };

  const handleDropdownChange = (selectedCrop: any) => {
    setCropType(selectedCrop);
  };

  const handleFarmingTypeChange = (farmingType: any) => {
    setFarmingType(farmingType);
  };

  const options = {
    onClose,
    open,
    headerOptions,
    stickFooter: true,
    footer: (
      <>
        <Button
          appearance="primary"
          className="mr-4"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button appearance="basic" onClick={onClose}>
          Close
        </Button>
      </>
    ),
  };

  const [firstName, setFirstName] = React.useState("");
  const [middleName, setMiddleName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [landArea, setlandArea] = React.useState("");
  const [contactNumber, setContactNumber] = React.useState("");
  const [lastCrop, setLastCrop] = React.useState("");
  const [cropType, setCropType] = React.useState("");
  const [farmingType, setFarmingType] = React.useState("");
  const [soilType, setSoilType] = React.useState("");
  const [landAddress, setlandAddress] = React.useState("");

  const handleInputChange = (e: any) => {
    console.log("handleInputChange", e);
  };

  const onClear = (e: any) => {
    console.log("onClear", e);
  };

  const Dropdownoptions = [
    {
      label: "Pulses",
      value: "pulses",
    },
    {
      label: "Vegitables",
      value: "vegitables",
    },
    {
      label: "Raw",
      value: "raw",
      subInfo: "Cotton, Rice, Tea, etc",
    },
    {
      label: "Sugarcan",
      value: "sugarcan",
    },
    {
      label: "Fruits",
      value: "fruits",
    },
    {
      label: "Flowers",
      value: "flowers",
    },
  ];

  const FarmingType = [
    {
      label: "Organic",
      value: "organic",
    },
    {
      label: "In-organic",
      value: "inorganic",
    },
  ];

  const alignmentHorizontal = "horizontal";
  const checkboxOptions = [
    { label: "Yes", name: "yes", value: "yes" },
    { label: "No", name: "no", value: "no" },
  ];
  const pesticidesOptions = [
    { label: "Organic", name: "organic", value: "organic" },
    { label: "In-organic", name: "inOrganic", value: "inOrganic" },
    { label: "Both", name: "both", value: "both" },
  ];
  const storageOptions = [
    { label: "Yes", name: "yup", value: "yes" },
    { label: "No", name: "nope", value: "no" },
  ];

  return (
    <div>
      <Sidesheet {...options} className="sidesheet">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="inputDiv">
              <Label htmlFor="firstName">First name</Label>
              <Input
                placeholder="First Name"
                name="firstName"
                id="firstName"
                className="w-100 inputFields horizontalGap"
                value={firstName}
                onChange={handleInputChange}
                onClear={onClear}
              />
            </div>
            <div className="inputDiv">
              <Label htmlFor="middleName">Middle name</Label>
              <Input
                placeholder="Middle Name"
                name="middleName"
                id="middleName"
                className="w-100 inputFields horizontalGap"
                value={middleName}
                onChange={handleInputChange}
                onClear={onClear}
              />
            </div>
            <div className="inputDiv">
              <Label htmlFor="lastName">Last name</Label>
              <Input
                placeholder="Last Name"
                name="lastName"
                id="lastName"
                className="w-100 inputFields horizontalGap"
                value={lastName}
                onChange={handleInputChange}
                onClear={onClear}
              />
            </div>
          </div>
          <div className="secondRow container">
            <div className="secondRow">
              <Label htmlFor="landArea">Land area</Label>
              <Input
                placeholder="Land area (in acers)"
                name="landArea"
                id="landArea"
                className="w-100 horizontalGap"
                value={landArea}
                onChange={handleInputChange}
                onClear={onClear}
              />
            </div>
            <div className="secondRow">
              <Label htmlFor="contactNumber">Contact number</Label>
              <Input
                placeholder="Contact Number"
                name="contactNumber"
                id="contactNumber"
                className="w-100 horizontalGap"
                value={contactNumber}
                onChange={handleInputChange}
                onClear={onClear}
              />
            </div>
          </div>
          <div className="secondRow container">
            <div className="secondRow dropdown">
              <Label htmlFor="landArea">Crop type</Label>
              <Dropdown
                options={Dropdownoptions}
                className="w-100 horizontalGap"
                inlineLabel="Crop Type"
                withCheckbox={true}
                onChange={handleInputChange}
              />
            </div>
            <div className="secondRow">
              <Label htmlFor="lastCrop">Last crop cultivated</Label>
              <Input
                placeholder="Last crop cultivated"
                name="lastCrop"
                id="lastCrop"
                className="w-100 horizontalGap"
                value={lastCrop}
                onChange={handleInputChange}
                onClear={onClear}
              />
            </div>
          </div>
          <div className="secondRow container">
            <div className="secondRow dropdown">
              <Label htmlFor="landArea">Farming type</Label>
              <Dropdown
                options={FarmingType}
                className="w-100 horizontalGap"
                inlineLabel="Farming Type"
                withCheckbox={true}
                onChange={handleInputChange}
              />
            </div>
            <div className="secondRow">
              <Label htmlFor="soilType">Soil type</Label>
              <Input
                placeholder="Soil type (black, red, etc.)"
                name="soilType"
                id="soilType"
                className="w-100 horizontalGap"
                value={soilType}
                onChange={handleInputChange}
                onClear={onClear}
              />
            </div>
          </div>
          <div className="secondRow container">
            <div className="secondRow">
              <Label htmlFor="CfCheck">Ever been in contract farming?</Label>
              <ChoiceList
                // name="CfCheck"
                choices={checkboxOptions}
                allowMultiple={false}
                alignment={alignmentHorizontal}
                onChange={handleInputChange}
              />
            </div>
            <div className="secondRow">
              <Label htmlFor="pesticidesType">Type of pestisides used?</Label>
              <ChoiceList
                // name="pesticidesType"
                choices={pesticidesOptions}
                allowMultiple={false}
                alignment={alignmentHorizontal}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="secondRow container">
            <div className="secondRow">
              <Label htmlFor="storageCheck">
                Do you have any storage facility?
              </Label>
              <ChoiceList
                // name="storageCheck"
                choices={storageOptions}
                allowMultiple={false}
                alignment={alignmentHorizontal}
                onChange={handleInputChange}
              />
            </div>
            <div className="secondRow">
              <Label htmlFor="lastCrop">Land address</Label>
              <Input
                placeholder="Address of the farm"
                name="landAddress"
                id="landAddress"
                className="w-100 horizontalGap"
                value={landAddress}
                onChange={handleInputChange}
                onClear={onClear}
              />
            </div>
          </div>
        </form>
      </Sidesheet>
    </div>
  );
};

export default AddFarmers;
