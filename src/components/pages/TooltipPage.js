import React, { Component } from 'react'
import CodeSnippet from '../helper/CodeSnippet'

export class TooltipPage extends Component {
  render () {
    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem sg-hero__elem--min">
            <span className="spx-adv-tip spx-adv-tip--right">
              Hover over me
              <div className="spx-adv-tip__content">
                Look at me being all tooltip. I can even put markup inside <a href="http://google.com">google saves lives.</a>
              </div>
            </span>
          </div>
        </div>

        <div className="app-view">
          <div className="flex">
            <div class="flex__i--xs-12 flex__i--md-6">
              <span className="spx-adv-tip">
                Hover over me
                <div className="spx-adv-tip__content">
                  Look at me being all tooltip. I can even put markup inside <a href="http://google.com">google saves lives.</a>
                </div>
              </span>

<CodeSnippet>
  {`
    <span class="spx-adv-tip">
      Hover over me
      <div class="spx-adv-tip__content">
        Look at me being all tooltip. I can even put markup inside <a href="http://google.com">google saves lives.</a>
      </div>
    </span>
  `}
</CodeSnippet>

            </div>
            <div class="flex__i--xs-12 flex__i--md-6">
              <h2>Tooltips(css only)</h2>
              <p>
                <span className="spx-pill spx-pill--pr">Stable</span>
              </p>
              <p>SPX tooltips come as css only, no JS needed. Apply the code to any element to reveal a tooltip on hover.</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default TooltipPage
