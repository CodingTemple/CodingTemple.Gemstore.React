import React, { Component } from 'react';
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import Description from "../tabs/Description";
import './main.css';
import Specs from './Specs';
import Reviews from './Reviews';

export default class PanelTabs extends Component {
  handleClick = e => e.preventDefault();

  render() {
    return (
      <Tabs
        defaultIndex={0}
        selectedTabClassName="active"
      >
        <TabList>
          <ul className="nav nav-tabs">
            <Tab className="nav-item">
              <a className="nav-link" href="/" onClick={this.handleClick}>Description</a>
            </Tab>
            <Tab className="nav-item">
              <a className="nav-link" href="/" onClick={this.handleClick}>Specs</a>
            </Tab>
            <Tab className="nav-item">
              <a className="nav-link" href="/" onClick={this.handleClick}>Reviews</a>
            </Tab>
          </ul>
        </TabList>
        <TabPanel><Description gem={this.props.gem} /></TabPanel>
        <TabPanel><Specs /></TabPanel>
        <TabPanel><Reviews gem={this.props.gem} /></TabPanel>
      </Tabs>
    )
  }
}
