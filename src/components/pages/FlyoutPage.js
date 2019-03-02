import React, { Component } from 'react'
import CodeSnippet from '../helper/CodeSnippet'
import Flyout from '../components/Flyout'

export class TemplatePage extends Component {
  render () {
    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem sg-hero__elem--min">
            <Flyout />
          </div>
        </div>

        <div className="app-view">
          <div className="flex">
            <div className="flex__i--xs-12 flex__i--md-6">

              <Flyout alignment="left"/>

              <Flyout alignment="right" />

<CodeSnippet>
  {`
    <div class="spx-flyout"> // is-open adds toggling
      <button class="spx-btn spx-btn--pr">Toggle</button> // this can be any element to trigger
      <div class="spx-flyout__menu">
        <ul>
          <li>01</li>
          <li>02</li>
          <li>03</li>
        </ul>
      </div>
    </div>
  `}
</CodeSnippet>

            </div>
            <div className="flex__i--xs-12 flex__i--md-6">
              <h2>Flyout</h2>
              <p>
                <span className="spx-pill spx-pill--pr">Stable</span>
              </p>
              <p>Flyout menus add a toggle action with a selectable area. Default is list styling but you can apply anything.</p>

<CodeSnippet>
  {`
    // CSS VARIABLES
    .spx-flyout {
      --bg: white;
      --border: var(--grey-l1);
      --hover: var(--brand-primary);
    }
  `}
</CodeSnippet>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default TemplatePage
