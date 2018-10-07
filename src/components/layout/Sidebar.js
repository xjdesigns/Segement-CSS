import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { openSidebar } from '../../store/layout/actionCreator'
import SidebarNav from './SidebarNav'

export class Sidebar extends Component {
  toggleMenu = () => {
    const { openSidebar, isSidebarOpen } = this.props
    openSidebar(!isSidebarOpen)
  }

  render () {
    const { isSidebarOpen } = this.props

    return (
      <div>
        <div className={'spx-click-shield ' + (isSidebarOpen ? 'is-open' : '')} onClick={() => this.toggleMenu()}></div>
        <div className={'app-sidebar ' + (isSidebarOpen ? 'is-open' : '')}>
          <div className={'app-sidebar__open ' + (isSidebarOpen ? 'is-open' : '')} onClick={() => this.toggleMenu()}>
            <i className="material-icons">add</i>
          </div>
          <nav className="app-sidebar__nav">
            <ul className="app-nav">
              <li className="app-nav__nav">Navigation</li>
              <li>
                <NavLink to="/" activeClassName="is-active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/BasePage" activeClassName="is-active">Base</NavLink>
              </li>
              <li>
                <NavLink to="/GridPage" activeClassName="is-active">Grid</NavLink>
              </li>
              <SidebarNav navTitle="Elements">
                <NavLink to="/ButtonPage" activeClassName="is-active">Button</NavLink>
                <NavLink to="/FormsPage" activeClassName="is-active">Forms</NavLink>
                <NavLink to="/CheckboxPage" activeClassName="is-active">Checkbox</NavLink>
                <NavLink to="/ImagePage" activeClassName="is-active">Image</NavLink>
                <NavLink to="/PillPage" activeClassName="is-active">Pills</NavLink>
                <NavLink to="/ProgressBarPage" activeClassName="is-active">Progress Bar</NavLink>
                <NavLink to="/RadioPage" activeClassName="is-active">Radio</NavLink>
                <NavLink to="/RangeSliderPage" activeClassName="is-active">Range Slider</NavLink>
                <NavLink to="/SelectPage" activeClassName="is-active">Select</NavLink>
                <NavLink to="/TogglePage" activeClassName="is-active">Toggle</NavLink>
                <NavLink to="/VideoPage" activeClassName="is-active">Video</NavLink>
              </SidebarNav>
              <SidebarNav navTitle="Components">
                <NavLink to="/AccordionPage" activeClassName="is-active">Accordion</NavLink>
                <NavLink to="/BreadcrumbPage" activeClassName="is-active">Breadcrumb</NavLink>
                <NavLink to="/CardPage" activeClassName="is-active">Card</NavLink>
                <NavLink to="/FlyoutPage" activeClassName="is-active">Flyout</NavLink>
                <NavLink to="/LoadingPage" activeClassName="is-active">Loading</NavLink>
                <NavLink to="/MediaObjPage" activeClassName="is-active">MediaObj</NavLink>
                <NavLink to="/PaginationPage" activeClassName="is-active">Pagination</NavLink>
                <NavLink to="/TilesPage" activeClassName="is-active">Tiles</NavLink>
                <NavLink to="/TooltipPage" activeClassName="is-active">Tooltip</NavLink>
                <NavLink to="/ToastPage" activeClassName="is-active">Toast</NavLink>
              </SidebarNav>
              <li>
                <NavLink to="/HelperPage" activeClassName="is-active">Helpers</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { layout } = state
  const { isSidebarOpen } = layout
  return {
    isSidebarOpen,
  }
}

const mapDispatchToProps = dispatch => ({
  openSidebar: visibility => dispatch(openSidebar(visibility))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
