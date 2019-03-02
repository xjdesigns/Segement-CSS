import React, { Component } from 'react'
import CodeSnippet from '../helper/CodeSnippet'

export class BreadcrumbPage extends Component {
  render () {
    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem sg-hero__elem--min">
            <div className="spx-bcrumb">
              <button className="spx-trail">Home</button>
              <button className="spx-trail">app</button>
              <button className="spx-trail">options</button>
            </div>
          </div>
        </div>

        <div className="app-view">
          <div className="flex">
            <div className="flex__i--xs-12 flex__i--md-6">

              <div className="spx-bcrumb">
                <button className="spx-trail">Home</button>
                <button className="spx-trail">app</button>
                <button className="spx-trail">options</button>
              </div>

<CodeSnippet>
  {`
    <div class="spx-bcrumb">
      <button class="spx-trail">Home</button>
      <button class="spx-trail">app</button>
      <button class="spx-trail">options</button>
    </div>
  `}
</CodeSnippet>

            </div>
            <div className="flex__i--xs-12 flex__i--md-6">
              <h2>Breadcrumbs</h2>
              <p>
                <span className="spx-pill spx-pill--pr">Stable</span>
              </p>
              <p>Breadcrumbs are used to track a current path incase you get lost you will find your way home.</p>

<CodeSnippet>
  {`
    // CSS VARIABLES
    .spx-bcrumb {
      --base: var(--grey-d1);
      --active: var(--brand-primary);
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

export default BreadcrumbPage
