import React, { Component } from 'react'
import CodeSnippet from '../helper/CodeSnippet'

export class PaginationPage extends Component {
  render () {
    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem sg-hero__elem--min">
            <ul className="spx-pagination">
              <li className="spx-pagination__btn">prev</li>
              <li className="spx-pagination__btn spx-is-disabled">&hellip;</li>
              <li className="spx-pagination__btn">1</li>
              <li className="spx-pagination__btn">2</li>
              <li className="spx-pagination__btn">3</li>
              <li className="spx-pagination__btn">&hellip;</li>
              <li className="spx-pagination__btn">next</li>
            </ul>
          </div>
        </div>

        <div className="app-view">
          <div className="flex">
            <div className="flex__i--xs-12 flex__i--md-6">

              <ul className="spx-pagination">
                <li className="spx-pagination__btn">prev</li>
                <li className="spx-pagination__btn spx-is-disabled">&hellip;</li>
                <li className="spx-pagination__btn">1</li>
                <li className="spx-pagination__btn">2</li>
                <li className="spx-pagination__btn">3</li>
                <li className="spx-pagination__btn">&hellip;</li>
                <li className="spx-pagination__btn">next</li>
              </ul>

<CodeSnippet>
  {`
    <ul class="spx-pagination">
      <li class="spx-pagination__btn">prev</li>
      <li class="spx-pagination__btn spx-is-disabled">&hellip;</li>
      <li class="spx-pagination__btn">1</li>
      <li class="spx-pagination__btn">2</li>
      <li class="spx-pagination__btn">3</li>
      <li class="spx-pagination__btn">&hellip;</li>
      <li class="spx-pagination__btn">next</li>
    </ul>
  `}
</CodeSnippet>
            </div>
            <div className="flex__i--xs-12 flex__i--md-6">
              <h2>Pagination</h2>
              <p>
                <span className="spx-pill spx-pill--pr">Stable</span>
              </p>
              <p>Pagination allows you to present to a user options for jumping from page to page, with options for next or skip ahead.</p>

<CodeSnippet>
  {`
    // CSS VARIABLES
    .spx-pagination {
      --bg: var(--brand-primary);
      --text-hover: white;
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

export default PaginationPage
