import React, { Component } from 'react'
import CodeSnippet from '../helper/CodeSnippet'

export class RadioPage extends Component {
  render () {
    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem">
            <label className="spx-radio">
              <input type="radio" name="radio" />
              <div className="spx-radio__dot"></div>
              Radio Button 01
            </label>
            <label className="spx-radio">
              <input type="radio" name="radio" />
              <div className="spx-radio__dot"></div>
              Radio Button 02
            </label>
          </div>
        </div>

        <div className="app-view">
          <div className="flex">
            <div className="flex__i--xs-12 flex__i--md-6">
              <label className="spx-radio">
                <input type="radio" name="radio" />
                <div className="spx-radio__dot"></div>
                Radio Button 01
              </label>
              <label className="spx-radio">
                <input type="radio" name="radio" />
                <div className="spx-radio__dot"></div>
                Radio Button 02
              </label>

<CodeSnippet>
  {`
    <label class="spx-radio">
      <input type="radio" name="radio" />
      <div class="spx-radio__dot"></div>
      Radio Button 01
    </label>
  `}
</CodeSnippet>

            </div>
            <div className="flex__i--xs-12 flex__i--md-6">
              <h2>Radio Buttons</h2>
              <p>
                <span className="spx-pill spx-pill--pr">Stable</span>
              </p>
              <p>Radios buttons allow the user to interact with several options while being allowed to select only one.</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default RadioPage
