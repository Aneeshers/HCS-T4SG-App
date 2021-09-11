import Layout from "../components/Layout/Layout";
import CaseManagementContainer from "../components/CaseComponents/CaseManagementContainer";
import React from "react";
import MockCaseManagementContainer from "../components/MockCaseComponents/MockCaseManagementContainer";

const MockContainerTest = () => {
  return (
    <Layout pageTitle="T4SG Tech Challenge">
      <MockCaseManagementContainer />
    </Layout>
  );
};
export default MockContainerTest;
