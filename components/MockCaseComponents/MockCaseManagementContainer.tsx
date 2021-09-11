import React from "react";
import Button from "react-bootstrap/Button";
import { Container } from "reactstrap";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import "../../styles/casemanagement.module.css";
import MockCaseCategory from "./MockCaseCategory";
import Footer from "../CaseComponents/Footer";
import { Box } from "@material-ui/core";

const MockCaseManagementContainer = (props: {}) => {
  return (
    <>
      <h5 className="title">Home Page</h5>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <MockCaseCategory category_id={1} />
        </Grid>
        <Grid item xs={4}>
          <MockCaseCategory category_id={1} />
        </Grid>
        <Grid item xs={4}>
          <MockCaseCategory category_id={1} />
        </Grid>
        <Grid item xs={4}>
          <MockCaseCategory category_id={1} />
        </Grid>
      </Grid>

      <Container
        style={{
          width: "100%",
          borderStyle: "solid",
          padding: "0.75rem",
          marginTop: "0.75rem",
        }}
      >
        <Button variant="dark" onClick={() => "redirect"}>
          Add Category
        </Button>
        <Button variant="dark" onClick={() => "redirect"}>
          Delete Category
        </Button>
        <Button variant="dark" onClick={() => "redirect"}>
          Add Case
        </Button>
        <Button variant="dark" onClick={() => "redirect"}>
          Edit Case
        </Button>
        <Button variant="dark" onClick={() => "redirect"}>
          Delete Case
        </Button>
      </Container>
      <Footer />
    </>
  );
};
export default MockCaseManagementContainer;
