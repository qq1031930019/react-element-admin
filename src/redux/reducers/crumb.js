import { CRUMB } from '../actions/crumb'

const crumbObj = {
    primaryTitle: '',
    secondaryTitle: ''
}

export default function getCrumb (state = crumbObj, action) {
    switch (action.type) {
        case CRUMB: return { primaryTitle: action.data.primaryTitle, secondaryTitle: action.data.secondaryTitle  }
        default: return state
    }
}