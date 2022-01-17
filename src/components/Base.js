import React, { Component } from 'react'
import CodeSnippet from './helper/CodeSnippet'

export class BasePage extends Component {
  render () {
    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem">
            <div className="sg-proj-title">
              <h1>Variables and Base</h1>
            </div>
          </div>
        </div>

        <div className="app-view">
          <p>SEGMENT CSS is built off Eric Meyers reset. It is not included in the output file but is inside of the source directory.</p>
          <p>Ligatures use Material Icons so include that our modify the variable.</p>

          <div className="sg-divider"></div>
          <h2>Base HTML</h2>

<CodeSnippet>
  {`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>TITLE</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="css/em-reset.css">
        <link rel="stylesheet" href="SIXPIXELS/style.css">
      </head>
      <body>
      </body>
    </html>
  `}
</CodeSnippet>

          <div className="sg-divider"></div>
          <h2>CSS Variables</h2>

<CodeSnippet>
  {`
    :root {
      --brand-primary: #{$brand-primary};
      --brand-secondary: #{$brand-secondary};
      --brand-tertiary: #{$brand-tertiary};
      --brand-info: #{$brand-info};
      --brand-success: #{$brand-success};
      --brand-warning: #{$brand-warning};
      --brand-error: #{$brand-error};
      --grey-l1: #{$grey-l1};
      --grey-d1: #{$grey-d1};
      --font-size-root: #{$font-size-root};
      --font-size-base: #{$font-size-base};
      --font-family-base: #{$font-family-base};
    }
  `}
</CodeSnippet>

          <div className="sg-divider"></div>

          <div className="flex">
            <div className="flex__i--xs-12 flex__i--md-6">

<CodeSnippet>
  {`
    <h1>Headline 1</h1>
    <h2>Headline 2</h2>
    <h3>Headline 3</h3>
    <h4>Headline 4</h4>
    <h5>Headline 5</h5>
    <h6>Headline 6</h6>
  `}
</CodeSnippet>

            </div>
            <div className="flex__i--xs-12 flex__i--md-6">
              <h1>Headline 1</h1>
              <h2>Headline 2</h2>
              <h3>Headline 3</h3>
              <h4>Headline 4</h4>
              <h5>Headline 5</h5>
              <h6>Headline 6</h6>
            </div>
          </div>

          <div className="sg-divider"></div>

          <div className="flex">
            <div className="flex__i--xs-12 flex__i--md-6">

<CodeSnippet>
  {`
    <p>Paragraph - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis doloremque dolorum excepturi repellat totam perferendis voluptatibus doloribus tempore maiores aliquid!</p>
    <blockquote>Quote me I dare you!</blockquote>
    <ul class="spx-list">
      <li>01</li>
      <li>02</li>
      <li>03</li>
    </ul>
  `}
</CodeSnippet>

            </div>
            <div className="flex__i--xs-12 flex__i--md-6">
              <a href="https://github.com/xjdesigns/Segment-CSS" className="spx-link">Anchor Link</a>
              <div className="sg-divider"></div>
              <p>Paragraph - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis doloremque dolorum excepturi repellat totam perferendis voluptatibus doloribus tempore maiores aliquid!</p>
              <div className="sg-divider"></div>
              <blockquote>Base blockquote, additional classes available</blockquote>
              <div className="sg-divider"></div>
              <ul className="spx-list">
                <li>01</li>
                <li>02</li>
                <li>03</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default BasePage
