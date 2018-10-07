import React, { Component } from 'react'

export class Tile extends Component {
  state = {
    isFavorite: false,
  }

  setAsFavorite = () => {
    this.setState(prevState => {
      return {
        isFavorite: !prevState.isFavorite,
      }
    })
  }

  renderNoIcon = () => {
    const { isIcon, title, desc, actionsList } = this.props
    const hasActions = this.renderActionsList(actionsList)

    if (!isIcon) {
      return (
        <div className="spx-contents">
          <p>{title}</p>
          <p className="spx-contents__desc">{desc}</p>
          {hasActions}
        </div>
      )
    } else {
      return null
    }
  }

  renderActionsList = (actionsList) => {
    if (actionsList) {
      return (
        <div className="spx-tile-actions">
          {actionsList.map(action => {
            return (
              <a
                key={action.title}
                href={action.href}
              >{action.title}</a>
            )
          })}
        </div>
      )
    }
  }

  render () {
    const { actionCallback, isIcon } = this.props
    const { isFavorite } = this.state
    const hasContents = this.renderNoIcon()

    return (
      <div className="spx-app-tile spx-app-tile--fave">
        <div
          onClick={actionCallback}
          className={`spx-tiles__tile ${isIcon ? 'spx-tiles__tile--icon' : ''}`}
          data-icon={isIcon}
        >
          {hasContents}
          <div
            onClick={this.setAsFavorite}
            className={`spx-fave ${isFavorite ? 'is-favorited' : ''}`}
          >
            <i className="material-icons">loyalty</i>
          </div>
        </div>
      </div>
    )
  }
}

export default Tile
