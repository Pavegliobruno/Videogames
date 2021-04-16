const initialState = {
  videogames: [],
  searchVideogame: [],
  genres: [],
  createVideogame: null,
  
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VIDEOGAMES":
      return {
        ...state,
        videogames: Object.values(action.payload),
      };

    case "GET_VIDEOGAME_BY_NAME":
      return {
        ...state,
        searchVideogame: action.payload,
      };
    
    case "GET_VIDEOGAME_BY_ID":
      return {
        ...state,
        searchVideogame: action.payload,
      };
    
    case "GET_GENRES":
      return {
        ...state,
        genres: action.payload,
      };
    
    case "CREATE_VIDEOGAME":
      return {
        ...state,
        createVideogame: action.payload,
      };

    case "RESET":
    return {
      
    }
      
    

    default:
      return state;
  }
};