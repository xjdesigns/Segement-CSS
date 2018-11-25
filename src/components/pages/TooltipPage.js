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
            <div className="flex__i--xs-12 flex__i--md-6">
              <div>
                <span className="spx-adv-tip">
                  Normal tip
                  <div className="spx-adv-tip__content">
                    Look at me being all tooltip. I can even put markup inside <a href="http://google.com">google saves lives.</a>
                  </div>
                </span>
              </div>

              <div>
                <span className="spx-adv-tip spx-adv-tip--left">
                  Left tip
                  <div className="spx-adv-tip__content">
                    Look at me being all tooltip. I can even put markup inside <a href="http://google.com">google saves lives.</a>
                  </div>
                </span>
              </div>

              <div>
                <span className="spx-adv-tip spx-adv-tip--right">
                  Right tip
                  <div className="spx-adv-tip__content">
                    Look at me being all tooltip. I can even put markup inside <a href="http://google.com">google saves lives.</a>
                  </div>
                </span>
              </div>

              <div>
                <span className="spx-adv-tip spx-adv-tip--btm">
                  Bottom modifier
                  <div className="spx-adv-tip__content">
                    Look at me being all tooltip. I can even put markup inside <a href="http://google.com">google saves lives.</a>
                  </div>
                </span>
              </div>

<CodeSnippet>
  {`
    <span class="spx-adv-tip">
      Standard
      <div class="spx-adv-tip__content">
        Look at me being all tooltip. I can even put markup inside <a href="http://google.com">google saves lives.</a>
      </div>
    </span>

    <span class="spx-adv-tip spx-adv-tip--left">
      Left tip
      <div class="spx-adv-tip__content">...</div>
    </span>

    <span class="spx-adv-tip spx-adv-tip--right">
      Right tip
      <div class="spx-adv-tip__content">...</div>
    </span>

    <span class="spx-adv-tip spx-adv-tip--btm">
      Right tip
      <div class="spx-adv-tip__content">...</div>
    </span>
  `}
</CodeSnippet>

            </div>
            <div className="flex__i--xs-12 flex__i--md-6">
              <h2>Tooltips(css only)</h2>
              <p>
                <span className="spx-pill spx-pill--pr">Stable</span>
              </p>
              <p>SPX tooltips come as css only, no JS needed. Apply the code to any element to reveal a tooltip on hover.</p>
              <p>
                You can apply any markup inside of a tooltip but that usually isnt a good idea.
              </p>
              <p>All tooltips can be used with the bottom modifier.</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default TooltipPage
