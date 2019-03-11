import {
  OPEN_SIDEBAR,
  TOGGLE_TOAST,
  TOGGLE_COLOR_PANE,
} from './actionType'

export function openSidebar (vis) {
  return {
    type: OPEN_SIDEBAR,
    payload: {
      vis,
    }
  }
}

export function toggleToast (vis) {
  return {
    type: TOGGLE_TOAST,
    payload: {
      vis,
    }
  }
}

export function toggleColorPane (vis) {
  return {
    type: TOGGLE_COLOR_PANE,
    payload: {
      vis,
    }
  }
}
