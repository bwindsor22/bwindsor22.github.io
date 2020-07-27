import React from 'react';
import { Link } from 'react-router-dom';
import {
    Alignment,
    Button,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
} from "@blueprintjs/core";

export class Header extends React.PureComponent{
  render () {
    return (<div>
      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>Brad.Windsor</NavbarHeading>
            <NavbarDivider />
            <Link to='/'>
              <Button className={Classes.MINIMAL} icon="home" text="Home" />
            </Link >
            <Link to='/articles'>
              <Button className={Classes.MINIMAL} icon="document" text="Articles" />
            </Link>
            <Link to='/game'>
              <Button className={Classes.MINIMAL} icon="taxi" text="Game" />
            </Link>
            <Link to='/about'>
              <Button className={Classes.MINIMAL} icon="person" text="About" />
            </Link>
        </NavbarGroup>
      </Navbar>
    </div>)
  }
}
