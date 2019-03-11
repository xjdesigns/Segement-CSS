import {
  OPEN_SIDEBAR,
  TOGGLE_TOAST,
  TOGGLE_COLOR_PANE,
} from './actionType'

export const initialState = {
  isSidebarOpen: false,
  isToastOpen: false,
  isColorPaneOpen: false,
}

export default function layoutState (state = initialState, action) {
  switch (action.type) {
    case OPEN_SIDEBAR: {
      const newState = {
        ...state,
        isSidebarOpen: action.payload.vis,
      }
      return newState
    }
    case TOGGLE_TOAST: {
      const newState = {
        ...state,
        isToastOpen: action.payload.vis,
      }
      return newState
    }
    case TOGGLE_COLOR_PANE: {
      const newState = {
        ...state,
        isColorPaneOpen: action.payload.vis,
      }
      return newState
    }
    default: {
      return state
    }
  }
}
