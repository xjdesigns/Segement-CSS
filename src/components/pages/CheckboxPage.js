import React, { Component } from 'react'
import CodeSnippet from '../helper/CodeSnippet'

export class CheckboxPage extends Component {
  render () {
    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem">
            <label className="spx-checkbox">
              <input type="checkbox" name="checkbox" />
              <div className="spx-checkbox__box" data-icon="check" />
              <div className="spx-checkbox__material"></div>
              Checkbox
            </label>
          </div>
        </div>

        <div className="app-view">
          <div className="flex">
            <div class="flex__i--xs-12 flex__i--md-6">
              <label className="spx-checkbox">
                <input type="checkbox" name="checkbox" />
                <div className="spx-checkbox__box" data-icon="check"></div>
                <div className="spx-checkbox__material"></div>
                Checkbox
              </label>

<CodeSnippet>
  {`
    <label class="spx-checkbox">
      <input type="checkbox" name="checkbox" />
      <div class="spx-checkbox__box" data-icon="check"></div>
      <div class="spx-checkbox__material"></div>
      Checkbox
    </label>
  `}
</CodeSnippet>


            </div>
            <div class="flex__i--xs-12 flex__i--md-6">
              <h2>Checkboxes</h2>
              <p>
                <span className="spx-pill spx-pill--pr">Stable</span>
              </p>
              <p>Checkboxes... nuff said.</p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default CheckboxPage
