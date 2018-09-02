import React, { Component } from 'react'
import CodeSnippet from '../helper/CodeSnippet'

export class PillPage extends Component {
  render () {
    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem sg-hero__elem--min">
            <div className="spx-pill spx-pill--pr">Primary</div>
          </div>
        </div>

        <div className="app-view">
          <div className="flex">
            <div class="flex__i--xs-12 flex__i--sm-6">
              <div className="spx-pill spx-pill--pr">Primary</div>
              <div className="spx-pill spx-pill--sd">Secondary</div>
              <div className="spx-pill spx-pill--tr">Tertiary</div>
              <div className="spx-pill spx-pill--g1">Gray 1</div>

<CodeSnippet>
  {`
    <div class="spx-pill spx-pill--pr">Primary</div>
    <div class="spx-pill spx-pill--sd">Secondary</div>
    <div class="spx-pill spx-pill--tr">Tertiary</div>
    <div class="spx-pill spx-pill--g1">Gray 1</div>
  `}
</CodeSnippet>

            </div>
            <div class="flex__i--xs-12 flex__i--sm-6">
              <h2>Pills</h2>
              <p>
                <span className="spx-pill spx-pill--pr">Stable</span>
              </p>
              <p>Pills are great for displaying state, info you want to focus on, or disclaimers.</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default PillPage
