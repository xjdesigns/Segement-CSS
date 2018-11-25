import React, { Component } from 'react'

export class Header extends Component {
  render () {
    return (
      <header className="app-header">

        <div className="app-header__logo">
          <div className="spx-logo spx-logo--sm">
            <div className="spx-logo__px"></div>
            <div className="spx-logo__px"></div>
            <div className="spx-logo__px"></div>
            <div className="spx-logo__px"></div>
            <div className="spx-logo__px"></div>
          </div>
          SEGMENT CSS
        </div>
        <div className="app-header__links">
          <a
            href="https://github.com/xjdesigns/Segment-CSS/blob/master/SIXPIXELS/style.css"
            className="spx-link"
            target="_blank"
          >
            <span>v1.0.0</span>
          </a>
        </div>

      </header>
    )
  }
}

export default Header
