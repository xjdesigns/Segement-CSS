import React, { Component } from 'react'
import CodeSnippet from '../helper/CodeSnippet'
import Accordion from '../components/Accordion'

export class AccordionPage extends Component {
  render () {
    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem sg-hero__elem--min">
            <Accordion />
          </div>
        </div>

        <div className="app-view">
          <div className="flex">
            <div className="flex__i--xs-12 flex__i--md-6">

              <Accordion />

<CodeSnippet>
  {`
    <div class="spx-ac"> // .is-active gives the content display and toggles
      <div class="spx-ac__pane">
        <div class="spx-ac-title">
          Pane title
        </div>
        <div class="spx-ac-secondary">
          Secondary
        </div>
        <div class="spx-ac-action">
          <button class="spx-btn" data-icon="keyboard_arrow_down"></button>
        </div>
      </div>
      <div class="spx-ac__content">
        content here
      </div>
    </div>
  `}
</CodeSnippet>

            </div>
            <div className="flex__i--xs-12 flex__i--md-6">
              <h2>Accordion</h2>
              <p>
                <span className="spx-pill spx-pill--pr">Stable</span>
              </p>
              <p>Accordions are a collapsible pane that allows for content to be display, and a minimized set while closed.</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default AccordionPage
