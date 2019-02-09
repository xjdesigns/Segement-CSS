import React, { Component } from 'react'
import CodeSnippet from '../helper/CodeSnippet'

export class MediaObjPage extends Component {
  render () {
    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem sg-hero__elem--min">
            <div className="spx-media">
              <div className="spx-media__element">
                <img src="https://images.unsplash.com/photo-1472457974886-0ebcd59440cc?dpr=2&amp;auto=format&amp;fit=crop&amp;w=767&amp;h=512&amp;q=80&amp;cs=tinysrgb&amp;crop=" style={{width: '200px'}} alt="me" />
              </div>
              <div className="spx-media__body">
                Text goes here
              </div>
            </div>
          </div>
        </div>

        <div className="app-view">
          <div className="flex">
            <div className="flex__i--xs-12 flex__i--md-6">
              <div className="spx-media">
                <div className="spx-media__element">
                  <img src="https://images.unsplash.com/photo-1472457974886-0ebcd59440cc?dpr=2&amp;auto=format&amp;fit=crop&amp;w=767&amp;h=512&amp;q=80&amp;cs=tinysrgb&amp;crop=" style={{width: '200px'}} alt="me" />
                </div>
                <div className="spx-media__body">
                  Text goes here
                </div>
              </div>

<CodeSnippet>
  {`
    <div class="spx-media">
      <div class="spx-media__element">
        <img src="path/to/source" alt="me" />
      </div>
      <div class="spx-media__body">
        Text goes here
      </div>
    </div>
  `}
</CodeSnippet>

            </div>
            <div className="flex__i--xs-12 flex__i--md-6">
              <h2>Media Object</h2>
              <p>
                <span className="spx-pill spx-pill--pr">Stable</span>
              </p>
              <p>The media object, founded by Nicole Sullivan and rewrote to use flexbox.</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default MediaObjPage
