import {
    PICTURE_CHANGE,
    MARKER_CHANGE
} from './Map_types';


export default function (state = {}, action) {
    switch (action.type) {
        case PICTURE_CHANGE:
            return { ...state }
           
          case   MARKER_CHANGE:
              return {...state}

      

  
                
              
        default:
            return state;
    }
}