import React, { Component } from 'react'
import CodeSnippet from '../helper/CodeSnippet'

export class SelectPage extends Component {
  state = {
    options: [{
      name: 'One',
      value: 'One',
    }, {
      name: 'Two',
      value: 'Two',
    }]
  }

  render () {
    const { options } = this.state

    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem sg-hero__elem--min">
            <div className="spx-select">
              <select id="jason">
                {options.map(option => {
                  return (
                    <option key={option.name} value={option.value}>{option.name}</option>
                  )
                })}
              </select>
            </div>
          </div>
        </div>

        <div className="app-view">
          <div className="flex">
            <div className="flex__i--xs-12 flex__i--md-6">
              <form className="spx-form">
                <div className="flex">
                  <div className="flex__i--xs-12">
                    <label htmlFor="jason" className="spx-label">Select Label</label>
                    <div className="spx-select">
                      <select id="jason">
                        {options.map(option => {
                          return (
                            <option key={option.name} value={option.value}>{option.name}</option>
                          )
                        })}
                      </select>
                      <select id="jason" multiple>
                        {options.map(option => {
                          return (
                            <option key={option.name} value={option.value}>{option.name}</option>
                          )
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </form>

<CodeSnippet>
  {`
    <form class="spx-form">
      <div class="spx-select">
        <select>
          <option value="value">Option Text</option>
        </select>
      </div>
      <div class="spx-select">
        <select multiple>
          <option value="value">Option Text</option>
        </select>
      </div>
    </form>
  `}
</CodeSnippet>
            </div>
            <div className="flex__i--xs-12 flex__i--md-6">
              <h2>Selectbox</h2>
              <p>
                <span className="spx-pill spx-pill--sd">Working</span>
              </p>
              <p>Selectboxes are used in forms for selecting options. Adding the attribute multiple allows for more selections.</p>

<CodeSnippet>
  {`
    // CSS VARIABLES
    Select uses forms variables.
  `}
</CodeSnippet>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default SelectPage
