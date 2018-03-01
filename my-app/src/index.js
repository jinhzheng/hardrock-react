import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Divider } from 'semantic-ui-react';
import { Menu, Icon, Dropdown, Segment, Image, Header, Grid, List, Input, Button } from 'semantic-ui-react';

class TopMenu extends React.Component {

  render() {
    const itemStyle = { color: "#ccc", fontSize: "22px" };
    return (
        <Menu className="topmenu">
          <Menu.Item><Image
              src='http://courses.ics.hawaii.edu/ics314f17/morea/ui-frameworks/hard-rock-logo.png'/></Menu.Item>
          <Menu.Item style={itemStyle} position="right">CAFES</Menu.Item>
          <Menu.Item style={itemStyle}>CASINOS</Menu.Item>
          <Menu.Item style={itemStyle}>LIVE</Menu.Item>
          <Menu.Item style={itemStyle}>SHOP</Menu.Item>
          <Menu.Item style={itemStyle}>BLOG</Menu.Item>
          <Menu.Item style={itemStyle}>REWARDS</Menu.Item>

        </Menu>
    )
  }
}

class Middle extends React.Component {

  render() {
    return (
        <Grid className='backgroundpic'>
          <Grid.Column>
          </Grid.Column>
        </Grid>
    );
  }
}

class Bottom extends React.Component {

  render() {

    return (
        <Grid className='footer-background'>
          <Grid columns={2}>
            <Grid.Column Container width={16}textAlign='center' className='footer-one'>
              HARD ROCK CAFE HONOLULU
            </Grid.Column>
            <Grid.Column Container width={16}textAlign='center'>
              <Icon name="phone icon"/>
              +1-808-955-7383
              <Icon name='mail icon'/>
                Email Us
              <Icon name='home icon'/>
                280 Beachwalk, Honolulu, Hawaii 96815
                <Icon name="twitter icon"></Icon>
                <Icon name="facebook f icon"></Icon>
               <Icon name="instagram icon"></Icon>
                <Icon name="pinterest icon"></Icon>
               <Icon name="tripadvisor icon"></Icon>
            </Grid.Column>
          </Grid>
          </Grid>
          );
          }
          }

          class HardRock extends React.Component {

          render() {
          return (
          <div>
          <TopMenu/>
          <Middle/>
          <Bottom/>
          </div>
          );
        }
        }

          ReactDOM.render(<HardRock/>, document.getElementById('root'));
