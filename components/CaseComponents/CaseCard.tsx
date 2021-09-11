import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { useQuery } from "urql";
import { Box } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Color } from "react-bootstrap/esm/types";
import Button from "react-bootstrap/Button";
import { useMutation} from "urql";
import {
  ManagementCategory,
  ManagementContainerQuery,
} from "../CaseManagementContainer";

type CaseCardProps = {
  data: CaseData;
};

export type CaseData = {
  name: string;
  status: string;
  description: string;
  id: number;
};

const DeleteCaseMutation = `
mutation MyMutation($id: bigint = 23) {
  delete_cases(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
`;

const CaseCard: React.FC<CaseCardProps> = (props) => {
const caseData = props.data;
var CasebackgroundColor = "rgba(85, 239, 196, 0.5)";
if (caseData.status == "Done") {
      CasebackgroundColor = "rgba(85, 239, 196, 0.7)";    
  }else if (caseData.status == "To Do")
  {
    CasebackgroundColor = "rgba(116, 185, 255, 0.2)";


  }else{
    CasebackgroundColor = "rgba(162, 155, 254, 0.5)";
  } 
  const [result, executeMutation] = useMutation(DeleteCaseMutation);

  return (
    <Container>
      <div style={{ width: "100%", padding: "5px" }}>
        <Card body style={{ borderRadius: 10, backgroundColor: CasebackgroundColor}}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <CardTitle tag="h3">{caseData.name}</CardTitle>
            <CloseIcon />
          </Box>

          <CardSubtitle tag="h4">
            {caseData.status}
          </CardSubtitle>
          <CardText>{caseData.description}</CardText>
        </Card>
        <Button variant="danger" onClick={() => 
        {executeMutation({
          id: caseData.id,
        });
        }
      
      }>
                      Delete Case
                    </Button>
      </div>
    </Container>
  );}
export default CaseCard;
