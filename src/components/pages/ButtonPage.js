import React, { Component } from 'react'
import CodeSnippet from '../helper/CodeSnippet'

export class ButtonPage extends Component {
  render () {
    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem">
            <button className="spx-btn spx-btn--pr">I am button</button>
          </div>
        </div>

        <div className="app-view">
          <div className="flex">
            <div class="flex__i--xs-12 flex__i--md-6">
              <div className="sg-view-row">
                <button className="spx-btn spx-btn--pr">I am button</button>
                <button className="spx-btn spx-btn--pr spx-btn--icon" data-icon="check">Icon</button>
              </div>
              <div className="sg-view-row">
                <button className="spx-btn spx-btn--pr spx-btn--material" data-icon="check">Material</button>
                <button className="spx-btn spx-btn--pr spx-btn--circle" data-icon="check"></button>
              </div>
              <div className="sg-view-row">
                <button className="spx-btn spx-btn--sm spx-btn--pr">Small</button>
                <button className="spx-btn spx-btn--pr spx-btn--circle spx-btn--sm" data-icon="check"></button>
                <button className="spx-btn spx-btn--sm spx-btn--pr spx-btn--icon" data-icon="check">Small Icon</button>
                <button className="spx-btn spx-btn--sm spx-btn--pr spx-btn--material" data-icon="check">Small Material</button>
              </div>
              <div className="sg-view-row">
                <button className="spx-btn spx-btn--sm spx-btn--pr--inverted">Small</button>
                <button className="spx-btn spx-btn--pr--inverted spx-btn--circle spx-btn--sm" data-icon="check"></button>
                <button className="spx-btn spx-btn--sm spx-btn--pr--inverted spx-btn--icon" data-icon="check">Small Icon</button>
                <button className="spx-btn spx-btn--sm spx-btn--pr--inverted spx-btn--material" data-icon="check">Small Material</button>
              </div>
<CodeSnippet>
  {`
    <button class="spx-btn spx-btn--pr">I am button</button>
    <button class="spx-btn spx-btn--pr spx-btn--icon" data-icon="check">Icon</button>
    <button class="spx-btn spx-btn--pr spx-btn--material" data-icon="check">Material</button>
    <button class="spx-btn spx-btn--pr spx-btn--circle" data-icon="check"></button>
    <button class="spx-btn spx-btn--sm spx-btn--pr spx-btn--material" data-icon="check">Small</button>
  `}
</CodeSnippet>
            </div>
            <div class="flex__i--xs-12 flex__i--md-6">
              <h2>Buttons</h2>
              <p>
                <span className="spx-pill spx-pill--pr">Stable</span>
              </p>
              <p>Buttons add easy understanding to your page for elements a user should interact with. Whether it takes them to a new route or location, maybe toggles something on the page a user always knows a button is something of use.</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default ButtonPage
