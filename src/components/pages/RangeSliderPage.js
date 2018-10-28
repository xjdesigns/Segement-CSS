import React, { Component } from 'react'
import CodeSnippet from '../helper/CodeSnippet'

export class RangeSliderPage extends Component {
  state = {
    slideValue: 1,
  }

  updateSlideValue = ev => {
    const val = ev.target.value

    this.setState(prevState => {
      return {
        slideValue: val,
      }
    })
  }

  render () {
    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem sg-hero__elem--min">
            <div className="spx-range-slider">
              <input type="range" value={this.state.slideValue} min="0" max="100" step="1" onChange={this.updateSlideValue} />
            </div>
          </div>
        </div>

        <div className="app-view">
          <div className="flex">
            <div className="flex__i--xs-12 flex__i--md-6">
              <div className="spx-range-slider">
                <input type="range" value={this.state.slideValue} min="0" max="100" step="1" onChange={this.updateSlideValue} />
              </div>

<CodeSnippet>
  {`
    <div class="spx-range-slider">
      <input type="range" value="10" min="0" max="100" step="1" />
    </div>
  `}
</CodeSnippet>
            </div>
            <div className="flex__i--xs-12 flex__i--md-6">
              <h2>Range Sliders</h2>
              <p>
                <span className="spx-pill spx-pill--pr">Stable</span>
              </p>
              <p>Range sliders offer a simple user interaction for incrementing or decrementing values.</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default RangeSliderPage
