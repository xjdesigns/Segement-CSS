import React, { Component } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Sidebar from './components/layout/Sidebar'
import ColorPane from './components/layout/ColorPane'
import {
  Route,
  Switch,
} from 'react-router-dom'

import Homepage from './components/Homepage'
// Base
import BasePage from './components/Base'
import HelperPage from './components/pages/HelperPage'
// Elements
import ButtonPage from './components/pages/ButtonPage'
import GridPage from './components/pages/GridPage'
import FormsPage from './components/pages/FormsPage'
import CheckboxPage from './components/pages/CheckboxPage'
import ImagePage from './components/pages/ImagePage'
import PillPage from './components/pages/PillPage'
import ProgressBarPage from './components/pages/ProgressBarPage'
import RadioPage from './components/pages/RadioPage'
import RangeSliderPage from './components/pages/RangeSliderPage'
import SelectPage from './components/pages/SelectPage'
import TogglePage from './components/pages/TogglePage'
import VideoPage from './components/pages/VideoPage'
// Components
import AccordionPage from './components/pages/AccordionPage'
import BreadcrumbPage from './components/pages/BreadcrumbPage'
import CardPage from './components/pages/CardPage'
import FlyoutPage from './components/pages/FlyoutPage'
import LoadingPage from './components/pages/LoadingPage'
import MediaObjPage from './components/pages/MediaObjPage'
import PaginationPage from './components/pages/PaginationPage'
import TilesPage from './components/pages/TilesPage'
import TooltipPage from './components/pages/TooltipPage'
import ToastPage from './components/pages/ToastPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <ColorPane />

        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/BasePage" component={BasePage}/>
          <Route exact path="/GridPage" component={GridPage}/>
          <Route exact path="/HelperPage" component={HelperPage}/>
          <Route exact path="/ButtonPage" component={ButtonPage}/>
          <Route exact path="/FormsPage" component={FormsPage}/>
          <Route exact path="/CheckboxPage" component={CheckboxPage}/>
          <Route exact path="/ImagePage" component={ImagePage}/>
          <Route exact path="/PillPage" component={PillPage}/>
          <Route exact path="/ProgressBarPage" component={ProgressBarPage}/>
          <Route exact path="/RadioPage" component={RadioPage}/>
          <Route exact path="/RangeSliderPage" component={RangeSliderPage}/>
          <Route exact path="/SelectPage" component={SelectPage}/>
          <Route exact path="/TogglePage" component={TogglePage}/>
          <Route exact path="/VideoPage" component={VideoPage}/>
          <Route exact path="/AccordionPage" component={AccordionPage}/>
          <Route exact path="/BreadcrumbPage" component={BreadcrumbPage}/>
          <Route exact path="/CardPage" component={CardPage}/>
          <Route exact path="/FlyoutPage" component={FlyoutPage}/>
          <Route exact path="/LoadingPage" component={LoadingPage}/>
          <Route exact path="/MediaObjPage" component={MediaObjPage}/>
          <Route exact path="/PaginationPage" component={PaginationPage}/>
          <Route exact path="/TilesPage" component={TilesPage}/>
          <Route exact path="/TooltipPage" component={TooltipPage}/>
          <Route exact path="/ToastPage" component={ToastPage}/>
        </Switch>

        <Footer />
      </div>
    )
  }
}

export default App
