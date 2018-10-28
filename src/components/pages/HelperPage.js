import React, { Component } from 'react'
import DataTable from '../components/DataTable'
import { HELP_DESC } from '../../constants/constants'

export class HelperPage extends Component {
  render () {
    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem">
            <h2>Helpers</h2>
          </div>
        </div>

        <div className="app-view">
          <div className="flex">
            <div className="flex__i--xs-12">
              <DataTable descriptions={HELP_DESC} />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default HelperPage
