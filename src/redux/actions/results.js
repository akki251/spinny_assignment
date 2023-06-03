import * as api from '../api/index';
export const getResults =
  (query, page = 1) =>
  async (dispatch) => {
    try {
      dispatch({
        type: 'SET_QUERY',
        payload: {
          query,
        },
      });
      dispatch({
        type: 'START_LOAD',
      });
      const { data } = await api.getAnimeByQuery(query, page);

      dispatch({
        type: 'FETCH_RESULTS',
        payload: {
          results: data,
          isMoreData: page !== 1,
        },
      });
      dispatch({
        type: 'STOP_LOAD',
      });
    } catch (error) {
      console.log(error.message);
    }
  };
