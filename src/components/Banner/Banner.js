import Button from "@restart/ui/esm/Button";
import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import MenuBar from "../MenuBar/MenuBar";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <MenuBar></MenuBar>
          <div className="col-md-6">
            <h1 className="title">
            Learn more and make <br /> success the result of perfection.
            </h1>
            <p className="text-black text-center mt-3 ">
            Pick from over 100,000 online video courses with new additions published every month.
            </p>
            <div className="input p-2">
            <InputGroup className="mb-3">
    <FormControl
      placeholder="Search Your Favourite Courses"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button variant="primary" id="button-addon2">
      Button
    </Button>
  </InputGroup>
            </div>
          </div>
          <div className="col-md-6">
            <img src="http://skilify.theuxuidesigner.com/images/webp/girl-img-study.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
