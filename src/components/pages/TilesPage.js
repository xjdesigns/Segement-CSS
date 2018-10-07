import React, { Component } from 'react'
import CodeSnippet from '../helper/CodeSnippet'
import Tile from '../components/Tile'

export class TilesPage extends Component {
  actions = [{
    title: 'One',
    href: 'http://google.com',
  },{
    title: 'Two',
    href: 'http://google.com',
  }]

  myCb = () => {
    console.warn('yeah yeah yeah')
  }

  render () {
    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem">
            <div className="spx-tiles">
              <Tile
                actionCallback={this.myCb}
                title="I AM TILE"
                desc="Tiles can have descriptions... so cool"
                actionsList={this.actions}
              />
            </div>
          </div>
        </div>

        <div className="app-view">
          <div className="flex">
            <div className="flex__i--xs-6">
              <div className="spx-tiles">
                <Tile
                  actionCallback={this.myCb}
                  title="I AM TILE"
                  desc="Tiles can have descriptions... so cool"
                  actionsList={this.actions}
                />
                <Tile
                  actionCallback={this.myCb}
                  isIcon="check"
                />
              </div>

<CodeSnippet>
  {`
    <div class="spx-tiles">
      <div className="spx-app-tile"> // spx-app-tile--fave, adds more width
        <div
          class="spx-tiles__tile"
        >
          <div class="spx-contents">
            <p>Tile Title</p>
            <p class="spx-contents__desc">Tile description</p>

            <div class="spx-tile-actions">
              <a
                href="href/"
              >Anchor Text</a>
            </div>
          </div>
          <div
            class="spx-fave is-favorited"
          >
            <i class="material-icons">loyalty</i>
          </div>
        </div>

        // Icon Tile
        <div
          class="spx-tiles__tile spx-tiles__tile--icon"
          data-icon="icon ligature"
        >
          <div
            class="spx-fave is-favorited"
          >
            <i class="material-icons">loyalty</i>
          </div>
        </div>
      </div>
    </div>
  `}
</CodeSnippet>


            </div>
            <div className="flex__i--xs-6">
              <h2>Tiles</h2>
              <p>
                <span class="spx-pill spx-pill--pr">Stable</span>
              </p>
              <p>Tiles offer a functional item for users to interact with. Can link to a route, pass link actions, and toggle a favorite status.</p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default TilesPage
