export function getVideogames() {
  return function (dispatch) {
    return fetch(`http://localhost:3001/videogames`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_VIDEOGAMES", payload: json });
      });
  };
}

export function searchVideogames(name) {
  return (dispatch) =>
    fetch(`http://localhost:3001/videogames?name="${name}"`)
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "SEARCH_VIDEOGAMES",
          payload: json,
        });
      });
}

export function getVideogameById(id) {
  return (dispatch) =>
    fetch(`http://localhost:3001/videogame/${id}`)
      .then((resp) => resp.json())
      .then((json) => {
        console.log("este es el json " , json);
        dispatch({
          type: "GET_VIDEOGAME_BY_ID",
          payload: json,
        });
      });
}

export function getGenres() {
  return (dispatch) =>
    fetch(`http://localhost:3001/genres`)
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "GET_GENRES",
          payload: json,
        });
      });
}

export function createVideogame(obj) {
  return (dispatch) =>
    fetch("http://localhost:3001/videogame", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "CREATE_VIDEOGAME",
          payload: json,
        });
      });
}

export const resetAll = () => {
  return (dispatch) => {
    dispatch({
      type: "RESET",
    });
  };
};


//Filters and Orders 
export const orderAsc = (type) => (dispatch, getState) => {
  const filterBy = getState().filterBy;
  const videogames = getState().videogames.slice();
  const filtered = getState().filteredVideogames.slice();

  if (filterBy === "All") {
    if (type === "asc_rating") {
      const videogamesOrder = videogames.sort(
        (a, b) => a.rating - b.rating
      );
      dispatch({
        type: "ORDER_ASC_RATING",
        payload: {
          videogamesOrder,
          name: type,
        },
      });
    }
    if (type === "asc_name") {
      const videogamesOrder = videogames.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
      dispatch({
        type: "ORDER_ASC_NAME",
        payload: {
          videogamesOrder,
          name: type,
        },
      });
    }
  } else {
    if (type === "asc_rating") {
      const videogamesOrder = filtered.sort(
        (a, b) => a.rating - b.rating
      );
      dispatch({
        type: "ORDER_ASC_RATING",
        payload: {
          videogamesOrder,
          name: type,
        },
      });
    }
    if (type === "asc_name") {
      const videogamesOrder = filtered.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;

        return 0;
      });
      dispatch({
        type: "ORDER_ASC_NAME",
        payload: {
          videogamesOrder,
          name: type,
        },
      });
    }
  }
};

export const orderByGenre = (genres) => (dispatch, getState) => {
  let filteredGames = [];

  if (genres === "All") {
    filteredGames = getState().videogames.slice();
  } else {
    filteredGames = getState()
      .videogames.slice()
      .filter((game) =>
        (game.genres || []).includes(genres)
      )
  };
  dispatch({
    type: "ORDER_BY_GENRE",
    payload: {
      genres,
      videogameGenre: filteredGames,
    },
  });
};

export const orderByCreator = (source) => (dispatch, getState) => {
  if (source === "All") {
    const allVideogames = getState().videogames.slice();
    dispatch({
      type: "ORDER_BY_CREATOR",
      payload: {
        source,
        videogameSource: allVideogames,
      },
    });
  } else {
    const videogames = getState()
      .videogames.slice()
      .filter(function (G) {
        return G.source === source
      });
    dispatch({
      type: "ORDER_BY_CREATOR",
      payload: {
        videogames,
        source,
      },
    });
  }
};

export const orderDesc = (type) => (dispatch, getState) => {
  const filterBy = getState().filterBy;
  const videogames = getState().videogames.slice();
  const filtered = getState().filteredVideogames.slice();
  const orderBy = getState().orderBy;

  if (filterBy === "All") {
    if (type === "desc_rating") {
      const videogamesOrder = videogames.sort(
        (a, b) => b.rating - a.rating
      );
      dispatch({
        type: "ORDER_DESC_RATING",
        payload: {
          videogamesOrder,
          name: type,
        },
      });
    }
    if (type === "desc_name") {
      const videogamesOrder = videogames.sort((a, b) => {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;

        return 0;
      });
      dispatch({
        type: "ORDER_DESC_NAME",
        payload: {
          videogamesOrder,
          name: type,
        },
      });
    }
  } else {
    if (type === "desc_rating") {
      const videogamesOrder = filtered.sort(
        (a, b) => b.rating - a.rating
      );
      dispatch({
        type: "ORDER_DESC_RATING",
        payload: {
          videogamesOrder,
          name: type,
        },
      });
    }
    if (type === "desc_name") {
      const videogamesOrder = filtered.sort((a, b) => {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;

        return 0;
      });
      dispatch({
        type: "ORDER_DESC_NAME",
        payload: {
          videogamesOrder,
          name: type,
        },
      });
    }
  }
};