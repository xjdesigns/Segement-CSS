import React, { Component } from 'react'
import CodeSnippet from '../helper/CodeSnippet'
import Accordion from '../components/Accordion'

export class ActionPanel extends Component {
  render () {
    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem sg-hero__elem--min">
            <div className="spx-apanel spx-apanel--animated">
              <div className="spx-apanel__core">
                <button className="spx-btn spx-btn--sm spx-btn--pr--inverted spx-btn--circle" data-icon="check" />
              </div>

              <div className="spx-apanel__title">Action Panel</div>

              <div className="spx-apanel__actions">
                <div className="spx-panel-actions">
                  <button className="spx-btn spx-btn--sm spx-btn--pr spx-btn--circle" data-icon="alarm" />
                </div>
                <div className="spx-panel-actions">
                  <button className="spx-btn spx-btn--sm spx-btn--pr spx-btn--circle" data-icon="bookmark" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="app-view">
          <div className="flex">
            <div className="flex__i--xs-12 flex__i--md-6">

              <div className="spx-apanel">
                <div className="spx-apanel__title">Action Panel</div>

                <div className="spx-apanel__actions">
                  <div className="spx-panel-actions">
                    <button className="spx-btn spx-btn--sm spx-btn--pr spx-btn--circle" data-icon="alarm" />
                  </div>
                  <div className="spx-panel-actions">
                    <button className="spx-btn spx-btn--sm spx-btn--pr spx-btn--circle" data-icon="bookmark" />
                  </div>
                </div>
              </div>

              <div className="spx-apanel spx-apanel--animated">
                <div className="spx-apanel__core">
                  <button className="spx-btn spx-btn--sm spx-btn--pr--inverted spx-btn--circle" data-icon="check" />
                </div>

                <div className="spx-apanel__title">Action Panel</div>

                <div className="spx-apanel__actions">
                  <div className="spx-panel-actions">
                    <button className="spx-btn spx-btn--sm spx-btn--pr spx-btn--circle" data-icon="alarm" />
                  </div>
                  <div className="spx-panel-actions">
                    <button className="spx-btn spx-btn--sm spx-btn--pr spx-btn--circle" data-icon="bookmark" />
                  </div>
                </div>
              </div>

<CodeSnippet>
  {`
    <div class="spx-apanel"> // add spx-apanel--animated for animated panels
      <div class="spx-apanel__core"> // Optional
        <button class="spx-btn spx-btn--sm spx-btn--pr--inverted spx-btn--circle" data-icon="check" />
      </div>

      <div class="spx-apanel__title">Action Panel</div>

      <div class="spx-apanel__actions"> // Optional
        <div class="spx-panel-actions">
          ...button use is common but any element would work
        </div>
      </div>
    </div>
  `}
</CodeSnippet>

            </div>
            <div className="flex__i--xs-12 flex__i--md-6">
              <h2>Action Panel</h2>
              <p>
                <span className="spx-pill spx-pill--pr">Stable</span>
              </p>
              <p>Action panels allows you to have dynamic panels with content to allow user interactions.</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default ActionPanel
