import axios from 'axios';

const FETCH_GREETINGS = 'hello-rails-react/greetings/FETCH_GRERTINGS';
const initialState = [];

export const fetchGreeting = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/greetings');
    const greeting = Object.values(response.data);
    dispatch({
      type: FETCH_GREETINGS,
      payload: greeting,
    });
  } catch (error) {
    console.log(error);
  }
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

export default (greetingReducer);
