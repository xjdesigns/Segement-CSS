import React, { Component} from 'react'
import { ChromePicker } from 'react-color'

const cssVars = [{
  css: '--brand-primary',
  cls: '--pr',
}, {
  css: '--brand-secondary',
  cls: '--sd',
}, {
  css: '--brand-tertiary',
  cls: '--tr',
}, {
  css: '--grey-l1',
  cls: '--gl1',
}, {
  css: '--grey-d1',
  cls: '--gd1',
}, {
  css: '--brand-info',
  cls: '--info',
}, {
  css: '--brand-success',
  cls: '--success',
}, {
  css: '--brand-warning',
  cls: '--warning',
}, {
  css: '--brand-error',
  cls: '--error',
}]

export class ColorPickerContainer extends Component {
  state = {
    background: '#cccccc',
    currentColor: cssVars[0].css,
    values: cssVars,
  }

  componentDidMount () {
    const body = document.body
    const brand = getCompColor(body, cssVars[0].css)
    this.setState({
      background: brand,
    })
  }

  setColorToChange = color => {
    const body = document.body
    const brand = getCompColor(body, color)
    this.setState({
      background: brand,
      currentColor: color,
    })
  }

  handleChangeComplete = color => {
    const { currentColor } = this.state

    const head = document.head
    let style = document.createElement('style')
    const css = `
      :root {
        ${currentColor}: ${color.hex};
      }
    `
    style.appendChild(document.createTextNode(css))
    head.appendChild(style)

    this.setState(prevState => {
      return {
        background: color.hex,
      }
    })
  }

  render () {
    const { values } = this.state

    return (
      <div>
        <ChromePicker
          color={ this.state.background }
          onChangeComplete={ this.handleChangeComplete }
        />

        {values.map((val, idx) => {
          return (
            <div
              key={idx}
              className="app-picker-mn"
            >
              <div className="app-picker-mn__title">
                {val.css}
              </div>
              <div
                onClick={() => this.setColorToChange(val.css)}
                className={`app-picker-mn__val ${val.cls}`}
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default ColorPickerContainer

function getCompColor (el, color) {
  return window.getComputedStyle(el).getPropertyValue(color)
}
