import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleColorPane } from '../../store/layout/actionCreator'
import ColorPickerContainer from '../ColorPickerContainer'

export class ColorPane extends Component {
  toggleCP = () => {
    const { isColorPaneOpen, toggleColorPane } = this.props
    toggleColorPane(!isColorPaneOpen)
  }

  render () {
    const { isColorPaneOpen } = this.props

    return (
      <div className={`app-color-pane ${isColorPaneOpen ? 'is-open' : ''}`}>
        <div className="app-cp-action" onClick={this.toggleCP}>
          <div className="app-cp-action__swatch" />
        </div>
        <ColorPickerContainer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { layout } = state
  const { isColorPaneOpen } = layout
  return {
    isColorPaneOpen,
  }
}

const mapDispatchToProps = dispatch => ({
  toggleColorPane: visibility => dispatch(toggleColorPane(visibility)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ColorPane)
