import React, { Component } from 'react'
import CodeSnippet from '../helper/CodeSnippet'

export class FormsPage extends Component {
  render () {
    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem">
            <form className="spx-form">
              <div className="flex">
                <div className="flex__i--xs-6">
                  <label className="spx-label">Input Label</label>
                  <input className="spx-input" type="number" placeholder="Placeholder Text" pattern="^\d+(?:\.\d{1,2})?$" />
                </div>
                <div className="flex__i--xs-6">
                  <label className="spx-label">Input Label</label>
                  <input className="spx-input" type="text" value="Input Value" />
                </div>
                <div className="flex__i--xs-12">
                  <label className="spx-label">Search Label</label>
                  <div className="spx-search">
                    <input className="spx-input" type="search" placeholder="Search Me" />
                    <button className="spx-btn spx-btn--pr spx-btn--circle" data-icon="search"></button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="app-view">
          <div className="flex">
            <div className="flex__i--xs-12 flex__i--md-6">
              <form className="spx-form">
                <div className="flex">
                  <div className="flex__i--xs-6">
                    <label className="spx-label">Input Label</label>
                    <input className="spx-input" type="text" placeholder="Placeholder Text" />
                  </div>
                  <div className="flex__i--xs-6">
                    <label className="spx-label">Input Label</label>
                    <input className="spx-input" type="text" value="Input Value" />
                  </div>
                  <div className="flex__i--xs-12">
                    <label className="spx-label">Textarea Label</label>
                    <textarea className="spx-textarea" cols="30" rows="10"></textarea>
                  </div>
                  <div className="flex__i--xs-4">
                    <label className="spx-label">Input Label</label>
                    <input className="spx-input" type="text" value="Input Value" />
                  </div>
                  <div className="flex__i--xs-4">
                    <label className="spx-label">Input Label</label>
                    <input className="spx-input has-error" type="text" value="Input Value" />
                  </div>
                  <div className="flex__i--xs-4">
                    <label className="spx-label">Input Label</label>
                    <input className="spx-input" type="text" value="Input Value" />
                  </div>
                  <div className="flex__i--xs-3">
                    <label className="spx-label">Input Label</label>
                    <input className="spx-input" type="text" value="Input Value" />
                  </div>
                  <div className="flex__i--xs-9">
                    <label className="spx-label">Input Label</label>
                    <input className="spx-input" type="text" value="Input Value" />
                  </div>
                  <div className="flex__i--xs-12">
                    <label className="spx-label">Search Label</label>
                    <div className="spx-search">
                      <input className="spx-input" type="search" placeholder="Search Me" />
                      <button className="spx-btn spx-btn--pr spx-btn--circle" data-icon="search"></button>
                    </div>
                  </div>
                </div>
              </form>

<CodeSnippet>
  {`
    <form class="spx-form">
      <div class="flex">
        <div class="flex__i--xs-12">
          <label class="spx-label">Input Label</label>
          <input class="spx-input" type="text" value="Input Value" />
        </div>
        <div class="flex__i--xs-12">
          <label class="spx-label">Textarea Label</label>
          <textarea class="spx-textarea" cols="30" rows="10"></textarea>
        </div>
        <div class="flex__i--xs-12">
          <label class="spx-label">Search Label</label>
          <div class="spx-search">
            <input class="spx-input" type="search" value="search me" />
            <button class="spx-btn spx-btn--pr spx-btn--circle" data-icon="search"></button>
          </div>
        </div>
      </div>
    </form>
  `}
</CodeSnippet>

            </div>
            <div className="flex__i--xs-12 flex__i--md-6">
              <h2>Forms</h2>
              <p>
                <span className="spx-pill spx-pill--sd">Working</span>
              </p>
              <p>Forms are built as elements, which work with SPX grid. Using the grid will allow for multiple layouts with forms while keeping the code base minimal.</p>

<CodeSnippet>
  {`
    // CSS VARIABLES
    .spx-form {
      --label: var(--grey-l1);
      --bg: white;
      --border: var(--grey-l1);
      --border-active: var(--brand-primary);
      --field-error: var(--brand-error);
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

export default FormsPage
