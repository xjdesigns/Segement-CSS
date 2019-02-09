import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleToast } from '../../store/layout/actionCreator'
import CodeSnippet from '../helper/CodeSnippet'
import Toaster from '../components/Toaster'

export class ToastPage extends Component {
  toggleToaster = () => {
    const { isToastOpen, toggleToast } = this.props
    toggleToast(!isToastOpen)
  }

  render () {
    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem sg-hero__elem--min">
            <button onClick={this.toggleToaster} className="spx-btn spx-btn--pr">Toggle Toast</button>
          </div>
        </div>

        <div className="app-view">
          <div className="flex">
            <div className="flex__i--xs-12 flex__i--md-6">

              <button onClick={this.toggleToaster} className="spx-btn spx-btn--pr">Toggle Toast</button>
              <Toaster />

<CodeSnippet>
  {`
    // NOTE: It is best to place this as high up the DOM as possible
    <div class="spx-toaster">
      <div class="spx-toast is-success">
        <p>This was successful</p>
      </div>
      <div class="spx-toast is-error">
        <p>This was an error</p>
      </div>
    </div>
  `}
</CodeSnippet>

            </div>
            <div className="flex__i--xs-12 flex__i--md-6">
              <h2>Toasts</h2>
              <p>
                <span className="spx-pill spx-pill--sd">Working</span>
              </p>
              <p>Toasts are an easy way to display messages for users, giving them an option to discard or automatically disappear.</p>
              <p><code>NOTE:</code> Toasts use fixed positioning with a z-index of 1001.</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { layout } = state
  const { isToastOpen } = layout

  return {
    isToastOpen,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleToast: visibility => dispatch(toggleToast(visibility)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToastPage)
