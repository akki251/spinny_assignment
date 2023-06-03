import { FETCH_RESULTS, START_LOAD, STOP_LOAD, SET_QUERY } from './constants';
const results = (
  state = { results: [], loading: false, query: '' },
  action
) => {
  switch (action.type) {
    case FETCH_RESULTS: {
      const { isMoreData, results } = action.payload;
      if (isMoreData) {
        const prevPageResults = state.results.data;
        const newPageResults = results.data;
        const newPagePaginationData = results.pagination;
        return {
          ...state,
          results: {
            data: [...prevPageResults, ...newPageResults],
            pagination: newPagePaginationData,
          },
        };
      }

      return { ...state, results: action.payload.results };
    }
    case SET_QUERY: {
      return { ...state, query: action.payload.query };
    }
    case START_LOAD: {
      return { ...state, loading: true };
    }

    case STOP_LOAD: {
      return { ...state, loading: false };
    }
    default:
      return state;
  }
};

export default results;
