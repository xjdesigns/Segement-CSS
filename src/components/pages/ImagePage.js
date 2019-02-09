import React, { Component } from 'react'
import CodeSnippet from '../helper/CodeSnippet'

export class TemplatePage extends Component {
  state = {
    imgSrc: `https://images.unsplash.com/photo-1524654458049-e36be0721fa2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f9bac8510ae296aa30e284bfaec2f2d7&auto=format&fit=crop&w=750&q=80`,
  }

  render () {
    const { imgSrc } = this.state

    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem sg-hero__elem--min">
            <div className="spx-img">
              <img src={imgSrc} alt="SPX from Unsplash" />
            </div>
          </div>
        </div>

        <div className="app-view">
          <div className="flex">
            <div className="flex__i--xs-12 flex__i--md-6">
              <div className="spx-img">
                <img src={imgSrc} alt="SPX from Unsplash" />
              </div>
              <div className="spx-img spx-img--sm">
                <img src={imgSrc} alt="SPX from Unsplash" />
              </div>
              <div className="spx-img spx-img--md">
                <img src={imgSrc} alt="SPX from Unsplash" />
              </div>
              <div className="spx-img spx-img--lg">
                <img src={imgSrc} alt="SPX from Unsplash" />
              </div>

<CodeSnippet>
  {`
    <div class="spx-img">
      <img src="" alt="alt text" />
    </div>
    <div class="spx-img spx-img--sm">
      <img src="" alt="alt text" />
    </div>
    <div class="spx-img spx-img--md">
      <img src="" alt="alt text" />
    </div>
    <div class="spx-img spx-img--lg">
      <img src="" alt="alt text" />
    </div>
  `}
</CodeSnippet>

            </div>
            <div className="flex__i--xs-12 flex__i--md-6">
              <h2>Images</h2>
              <p>
                <span className="spx-pill spx-pill--pr">Stable</span>
              </p>
              <p>Images get constrained to a max and min for width / height. This preserves aspect ratio.</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default TemplatePage
