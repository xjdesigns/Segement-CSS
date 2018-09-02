import React, { Component } from 'react'
import CodeSnippet from '../helper/CodeSnippet'

export class TogglePage extends Component {
  render () {
    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem">
            <label className="spx-tgl">
              <input className="spx-tgl-input" type="checkbox" name="toggle-switch" />
              <div className="spx-tgl-btn"></div>
            </label>
          </div>
        </div>

        <div className="app-view">
          <div className="flex">
            <div class="flex__i--xs-12 flex__i--sm-6">
              <label className="spx-tgl">
                <input className="spx-tgl-input" type="checkbox" name="toggle-switch" />
                <div className="spx-tgl-btn"></div>
              </label>

<CodeSnippet>
  {`
    <label class="spx-tgl">
      <input class="spx-tgl-input" type="checkbox" />
      <div class="spx-tgl-btn"></div>
    </label>
  `}
</CodeSnippet>

            </div>
            <div class="flex__i--xs-12 flex__i--sm-6">
              <h2>Toggle Switch</h2>
              <p>
                <span className="spx-pill spx-pill--pr">Stable</span>
              </p>
              <p>Toggle switches are checkboxes that give the appearance of the popular apple toggle switch.</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default TogglePage
