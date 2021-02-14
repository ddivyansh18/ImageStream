import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  state = { activeItem: 'browse' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name = 'browse'
            active={activeItem === 'browse'}
            onClick={this.handleItemClick}
            as = {Link}
            to = '/'
          />
          <Menu.Item
            name='post'
            active={activeItem === 'post'}
            onClick={this.handleItemClick}
            as = {Link}
            to = '/post'
          />
          <Menu.Item
            name='edit'
            active={activeItem === 'edit'}
            onClick={this.handleItemClick}
            as = {Link}
            to = '/edit'
          />
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
            as = {Link}
            to = '/about'
          />
        </Menu>
      </Segment>
    )
  }
}
