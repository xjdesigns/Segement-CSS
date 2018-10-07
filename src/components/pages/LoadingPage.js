import React, { Component } from 'react'
import CodeSnippet from '../helper/CodeSnippet'

export class LoadingPage extends Component {
  render () {
    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem">
            <div className="spx-loading">
              <div className="spx-loading__dots"></div>
              <div className="spx-loading__dots"></div>
              <div className="spx-loading__dots"></div>
            </div>
          </div>
        </div>

        <div className="app-view">
          <div className="flex">
            <div class="flex__i--xs-12 flex__i--md-6">

              <div className="spx-loading">
                <div className="spx-loading__dots"></div>
                <div className="spx-loading__dots"></div>
                <div className="spx-loading__dots"></div>
              </div>

<CodeSnippet>
  {`
    <pre class="prettyprint">
      <code code-display>
        <div class="spx-loading">
          <div class="spx-loading__dots"></div>
          <div class="spx-loading__dots"></div>
          <div class="spx-loading__dots"></div>
        </div>
      </code>
    </pre>
  `}
</CodeSnippet>

            </div>
            <div class="flex__i--xs-12 flex__i--md-6">
              <h2>Loading Dots</h2>
              <p>
                <span className="spx-pill spx-pill--pr">Stable</span>
              </p>
              <p>Loading dots can accomdate up to 6 by default. If more than 6 is needed update the sass var inside the partial. Built on a one second timer.</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default LoadingPage
