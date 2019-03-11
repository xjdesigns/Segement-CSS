import React, { Component } from 'react'

export class Homepage extends Component {
  render () {
    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem">
            <div className="sg-proj-title">
              <h1>SEGMENT CSS</h1>
            </div>
          </div>
        </div>

        <div className="app-view">
          <div className="app-feature-tiles">

            <div className="app-ftile">
              <div className="app-ftile__title">
                <h2>CSS ONLY</h2>
              </div>
              <div className="app-ftile__desc">
                <p>Segment is designed to be CSS only, while providing extending classes for display which you flavor to your liking. Whether your using React, Angular, Vue, Javascript, etc&hellip;</p>
              </div>
            </div>

            <div className="app-ftile">
              <div className="app-ftile__title">
                <h2>CSS VARS</h2>
              </div>
              <div className="app-ftile__desc">
                <p>CSS variable support with fallback for browsers that do not yet support the spec. Fallbacks are the framework default, and require a sass compile if you want to change it as a base.</p>
              </div>
            </div>

            <div className="app-ftile">
              <div className="app-ftile__title">
                <h2>IE11 &gt;</h2>
              </div>
              <div className="app-ftile__desc">
                <p>Supports current browsers and IE11. The goal is to always support the browsers that are supported.</p>
              </div>
            </div>

            <div className="app-ftile">
              <div className="app-ftile__title">
                <h2>SCOPING</h2>
              </div>
              <div className="app-ftile__desc">
                <p>Namespacing allows for scoping, and all elements or components are scoped to its parent.</p>
              </div>
            </div>

            <div className="app-ftile">
              <div className="app-ftile__title">
                <h2>SYSTEM FONTS</h2>
              </div>
              <div className="app-ftile__desc">
                <p>Base styling uses no webfonts and only system level fonts. Not happy, just write a base override and include what you need.</p>
              </div>
            </div>

            <div className="app-ftile">
              <div className="app-ftile__title">
                <h2>1 VAR FILE</h2>
              </div>
              <div className="app-ftile__desc">
                <p>All variables are inside of 1 file for easy referencing and also keeps you aware to avoid bloat.</p>
              </div>
            </div>

          </div>

          <div className="sg-divider"></div>

          <div>
            <div>
              <h2>Current filesize minified: 37kb</h2>
            </div>

            <div className="sg-divider"></div>

            <ul className="spx-list">
              <li>Light weight</li>
              <li>1 variable file for easy customization</li>
              <li>IE support for 11 and above</li>
              <li>Uses no webfonts, only system level fonts</li>
              <li>Built on an atomic level for minimal trumping</li>
              <li>All components are scoped to its component classes</li>
              <li>Optional includes for components</li>
              <li>Namespace support(scss compiling required)</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage
