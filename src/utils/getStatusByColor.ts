import { Status } from "../types"

export const getStatusByColor = (status: Status) => {
    switch (status) {
      case Status.ONLINE: {
        return 'green'
      };
      case Status.STOPPED: {
        return 'red'
      };
      case Status.PAUSED: {
      return 'orange'
      }
      default: {
        return 'grey'
        }
    }
  }