import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

export default class Military extends Component{
    render(){
        return(
           <Container className="fontSmall">
           <Row>
               <h1 className="componentHeader">U.S. Army (Active Duty)</h1>
           </Row>
           <Row>
               <p className="componentText">Promoted to rank of Sergeant in a team leader position as quickly as allowed by policy (24 months)</p>
           </Row>
           <Row><p className="componentText">MOS: <a href="https://www.goarmy.com/careers-and-jobs/browse-career-and-job-categories/combat/fire-support-specialist.html" target="_blank" rel="noopener noreferrer">13F, Fire Support Specialist ("Forward Observer")</a></p></Row>
           <Row><p className="componentText">Two combat tours, Iraq</p></Row>
           <Row><p className="componentText">Participated in <a href="https://en.wikipedia.org/wiki/Operation_Desert_Spring" target="_blank" rel="noreferrer noopener">six-month intrinsic action</a> in Kuwait to deter Iraqi aggression prior to OIF I</p></Row>
           <Row><p className="componentText">Six month tour, South Korea; vicinity of the <a href="https://en.wikipedia.org/wiki/Korean_Demilitarized_Zone" target="_blank" rel="noreferrer noopener">DeMilitarized Zone ("DMZ")</a></p></Row>
           <Row><p className="componentText">Consistently achieved maximum score on physical fitness assessments</p></Row>
           </Container>
        );
    }
}