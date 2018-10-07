import React, { Component } from 'react'
import CodeSnippet from '../helper/CodeSnippet'

export class CardPage extends Component {
  render () {
    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem sg-hero__elem--min" style={{maxWidth: `30vw`}}>
            <div className="spx-card">
              <div className="spx-card__img" data-title="Hello World" data-desc="Product placement goes here">
                <img src="https://images.unsplash.com/photo-1464658824763-547203e5a4a1?dpr=2&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=" alt="" />
              </div>
              <div className="spx-card__content">
                <div className="spx-c-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum eveniet exercitationem, quibusdam cupiditate quam. Minima mollitia iste suscipit, pariatur odit ullam error aliquid dolore! Numquam dolorem, sapiente aperiam ducimus ipsa?
                  </p>
                </div>
                <div className="spx-c-action">
                  <button className="spx-btn spx-btn--pr spx-btn--sm">Click me</button>
                  <button className="spx-btn spx-btn--pr spx-btn--sm">Click me</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="app-view">
          <div className="flex">
            <div class="flex__i--xs-12 flex__i--md-6">

              <div className="spx-card">
                <div className="spx-card__img" data-title="Hello World" data-desc="Product placement goes here">
                  <img src="https://images.unsplash.com/photo-1464658824763-547203e5a4a1?dpr=2&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=" alt="" />
                </div>
                <div className="spx-card__content">
                  <div className="spx-c-info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum eveniet exercitationem, quibusdam cupiditate quam. Minima mollitia iste suscipit, pariatur odit ullam error aliquid dolore! Numquam dolorem, sapiente aperiam ducimus ipsa?
                    </p>
                  </div>
                  <div className="spx-c-action">
                    <button className="spx-btn spx-btn--pr spx-btn--sm">Click me</button>
                    <button className="spx-btn spx-btn--pr spx-btn--sm">Click me</button>
                  </div>
                </div>
              </div>

<CodeSnippet>
  {`
    <div class="spx-card">
      <div class="spx-card__img" data-title="Hello World" data-desc="Product placement goes here">
        <img src="path/to/image" alt="">
      </div>
      <div class="spx-card__content">
        <div class="spx-c-info">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum eveniet exercitationem, quibusdam cupiditate quam. Minima mollitia iste suscipit, pariatur odit ullam error aliquid dolore! Numquam dolorem, sapiente aperiam ducimus ipsa?
          </p>
        </div>
        <div class="spx-c-action">
          <button class="spx-btn spx-btn--pr spx-btn--sm">Click me</button>
          <button class="spx-btn spx-btn--pr spx-btn--sm">Click me</button>
        </div>
      </div>
    </div>
  `}
</CodeSnippet>

            </div>
            <div class="flex__i--xs-12 flex__i--md-6">
              <h2>Card</h2>
              <p>
                <span className="spx-pill spx-pill--pr">Stable</span>
              </p>
              <p>Cards allow a user to display image with text, along with a description and actions.</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default CardPage
