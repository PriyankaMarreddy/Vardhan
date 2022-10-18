import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';


const Tips = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Card style={{padding:10, marginBottom:15}}>
        <div
          style={{
            textTransform: "uppercase",
            fontSize: "20px",
            paddingBottom: "18px",
            paddingTop: "25px",
            fontFamily: "JosefinSans, sans-serif",
            color: "#b46e3c",
            fontWeight:600
            
          }}
        >
          {props.title}
        </div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          style={{borderBottom:'1px solid #efefef'}}
        >
          {/* <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <p sx={{ width: "33%", flexShrink: 0 }}>
              {props.tip1Heading}
            </p>
            <p sx={{ color: "text.secondary" }}>
              {props.tip1Suggest}
            </p>
          </AccordionSummary> */}
          <Accordion.Header>{props.tip1Heading}</Accordion.Header>
          <Accordion.Body>
            <p>{props.tip1Content}</p>
          </Accordion.Body>
        </Accordion>
        <Accordion
        style={{borderBottom:'1px solid #efefef'}}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          {/* <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <p sx={{ width: "33%", flexShrink: 0 }}>
              {props.tip2Heading}
            </p>
            <p sx={{ color: "text.secondary" }}>
              {props.tip2Suggest}
            </p>
          </AccordionSummary> */}
          <Accordion.Header>{props.tip2Heading}</Accordion.Header>
          <Accordion.Body>
            <p>{props.tip2Content}</p>
          </Accordion.Body>
        </Accordion>
        {props.tip3Heading ?
        <Accordion
        style={{borderBottom:'1px solid #efefef'}}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          {/* <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <p sx={{ width: "33%", flexShrink: 0 }}>
              {props.tip3Heading}
            </p>
            <p sx={{ color: "text.secondary" }}>
              {props.tip3Suggest}
            </p>
          </AccordionSummary> */}
          <Accordion.Header>{props.tip3Heading}</Accordion.Header>
          <Accordion.Body>
            <p>{props.tip3Content}</p>
          </Accordion.Body>
        </Accordion>:null
        }
        {props.tip4Heading ?
        <Accordion
        style={{borderBottom:'1px solid #efefef'}}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          {/* <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <p sx={{ width: "33%", flexShrink: 0 }}>
              {props.tip3Heading}
            </p>
            <p sx={{ color: "text.secondary" }}>
              {props.tip3Suggest}
            </p>
          </AccordionSummary> */}
          <Accordion.Header>{props.tip4Heading}</Accordion.Header>
          <Accordion.Body>
            <p>{props.tip4Content}</p>
          </Accordion.Body>
        </Accordion>:null
        }
        {/* <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
      </Card>
    </>
  );
};

export default Tips;
