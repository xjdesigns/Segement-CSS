import React, { Component } from 'react'
import { percentAsVal } from '../services/valueHandler'

export class MultiRange extends Component {
  state = {
    isDragging: false,
    leftPos: 200,
    value: 0,
    values: [10, 35, 43, 62, 77, 99],
    thumbMap: {},
  }

  componentDidMount () {
    this.track = document.querySelector('.spx-mrange__track')
    this.trackLeft = this.track.offsetLeft
    this.trackWidth = this.track.offsetWidth
    // I need to dynamically handle this
    this.trackMax = this.trackWidth - 20

    // MULTIRANGE
    this.currentId = null
    this.currentThumbOffset = 0
    this.currentIndex = 0

    // TODO: this really should be throttled IMO
    // TODO: this could also be moved to creation and removing when you start the click and end
    window.addEventListener('mousemove',  this.moveMe)
    window.addEventListener('mouseup',  this.stopDrag)

    this.setState(prevState => {
      return {
        value: percentAsVal(prevState.leftPos, this.trackMax, 10)
      }
    })

    this.initializeThumbs()
  }

  initializeThumbs = () => {
    const { values } = this.state

    let toTheThumb = {}
    const len = values.length

    for (let idx = 0; idx < len; idx++) {
      let min
      let max
      let value

      if (idx === 0) {
        value = values[idx]
        min = 0
        max = values[idx + 1] - 1
      } else if (idx === values.length - 1) {
        value = values[idx]
        min = values[idx - 1] + 1
        max = 100
      } else {
        value = values[idx]
        min = values[idx - 1] + 1
        max = values[idx + 1] - 1
      }

      toTheThumb[`thumb${idx}`] = {
        id: `thumb${idx}`,
        index: idx,
        value,
        min,
        max,
      }
    }

    this.setState({
      thumbMap: toTheThumb,
    })
  }

  startDrag = ev => {
    const { thumbMap } = this.state
    // Prevent default keeps the cursor from changing
    ev.preventDefault()
    this.setState({ isDragging: true })

    this.currentId = ev.target.id
    this.currentIndex = thumbMap[this.currentId].index
    const currentEl = document.querySelector(`#${this.currentId}`)
    this.currentThumbOffset = ev.clientX - currentEl.offsetLeft
  }

  stopDrag = () => {
    const { thumbMap, isDragging } = this.state
    if (isDragging) {
      const newThumbMap = this.updateValuesOnChange(thumbMap)
      this.setState({
        isDragging: false,
        thumbMap: newThumbMap,
      })
    }
  }

  moveMe = ev => {
    const { isDragging, thumbMap } = this.state

    if (isDragging) {
      const currentEl = thumbMap[this.currentId]
      let offsetMulti = ev.clientX - this.trackLeft - this.currentThumbOffset
      offsetMulti = percentAsVal(offsetMulti, this.trackMax, 10)

      // NOTE: this is min/max
      if(offsetMulti < currentEl.min) {
        offsetMulti = currentEl.min
      } else if(offsetMulti > currentEl.max) {
        offsetMulti = currentEl.max
      }

      thumbMap[this.currentId].value = offsetMulti
      const value = offsetMulti

      this.setState({
        value,
        thumbMap,
      })
    }
  }

  updateValuesOnChange = (map) => {
    const { values } = this.state
    const idx = this.currentIndex
    if (values.length > 1) {
      if (idx === 0) {
        map[`thumb${idx + 1}`].min = map[`thumb${idx}`].value + 1
      } else if (idx === (values.length - 1)) {
        map[`thumb${idx - 1}`].max = map[`thumb${idx}`].value - 1
      } else {
        map[`thumb${idx - 1}`].max = map[`thumb${idx}`].value - 1
        map[`thumb${idx + 1}`].min = map[`thumb${idx}`].value + 1
      }
    }
    return map
  }

  createThumbs = map => {
    let children = []
    for (let key in map) {
      const val = map[key]
      children.push(
        <div
          key={val.id}
          id={val.id}
          className="spx-mrange__thb"
          onMouseDown={this.startDrag}
          style={{left: `calc(${val.value}% - 10px)`}} // so fucking stupid react
        />
      )
    }
    return children
  }

  render () {
    // even one better why not set it as a css variable???
    // with a fallback if needed? Which one is more performant is the question???
    const { value, thumbMap } = this.state

    return (
      <div>
        <div className="spx-mrange">
          <div className="spx-mrange__track" />
          {this.createThumbs(thumbMap)}
        </div>
        <div>{value}</div>
      </div>
    )
  }
}

export default MultiRange
