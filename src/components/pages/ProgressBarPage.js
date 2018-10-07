import React, { Component } from 'react'
import CodeSnippet from '../helper/CodeSnippet'

export class ProgressBarPage extends Component {
  state = {
    progWidth: 10,
  }

  render () {
    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem sg-hero__elem--min">
            <div className="spx-progress">
              <div style={{width: `10%`}} ></div>
            </div>
          </div>
        </div>

        <div className="app-view">
          <div className="flex">
            <div class="flex__i--xs-12 flex__i--md-6">
              <div className="spx-progress">
                <div style={{width: `10%`}} ></div>
              </div>
              <div className="spx-progress spx-progress--title" data-title="50">
                <div style={{width: `10%`}} ></div>
              </div>

<CodeSnippet>
  {`
    <div class="spx-progress">
      <div style="width: 30%;"></div>
    </div>
  `}
</CodeSnippet>

            </div>
            <div class="flex__i--xs-12 flex__i--md-6">
              <h2>Progress Bars</h2>
              <p>
                <span className="spx-pill spx-pill--pr">Stable</span>
              </p>
              <p>Progress bars display a percentage state to the user. This helps keep track for things like loading, waiting for responses, or so users know you are working on something for them.</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default ProgressBarPage
