import React, { Component } from 'react'
import CodeSnippet from '../helper/CodeSnippet'

export class VideoPage extends Component {
  render () {
    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem sg-hero__elem--min">
            <div className="spx-vid">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/zw47_q9wbBE"
                frameborder="0"
                allowfullscreen
                title="DemoTop"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="app-view">
          <div className="flex">
            <div class="flex__i--xs-12 flex__i--md-6">
              <div className="spx-vid">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/zw47_q9wbBE"
                frameborder="0"
                allowfullscreen
                title="DemoMain"
              ></iframe>
              </div>

<CodeSnippet>
  {`
    <div class="spx-vid">
      BEST SUPPORT IS YOUTUBE
      <iframe width="560" height="315" src="videoSource" frameborder="0" allowfullscreen></iframe>
    </div>
  `}
</CodeSnippet>

            </div>
            <div class="flex__i--xs-12 flex__i--md-6">
              <h2>Videos</h2>
              <p>
                <span className="spx-pill spx-pill--pr">Stable</span>
              </p>
              <p>This preserves aspect ratio of 16:9 videos.</p>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default VideoPage
