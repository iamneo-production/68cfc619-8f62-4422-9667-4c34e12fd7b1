const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    query: '',
    isSubmitted: false,
    formError: '',
    isFormValid: false
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_FIRST_NAME':
        return {
          ...state,
          firstName: action.payload
        };
      case 'UPDATE_LAST_NAME':
        return {
          ...state,
          lastName: action.payload
        };
      case 'UPDATE_EMAIL':
        return {
          ...state,
          email: action.payload
        };
      case 'UPDATE_PHONE_NUMBER':
        return {
          ...state,
          phoneNumber: action.payload
        };
      case 'UPDATE_QUERY':
        return {
          ...state,
          query: action.payload
        };
        case 'SUBMIT_FORM':
          if (
            state.firstName !== '' &&
            state.lastName !== '' &&
            state.email !== '' &&
            state.phoneNumber !== '' &&
            state.query !== ''
          ) {
            return {
              ...state,
              isSubmitted: true,
              formError: '',
              isFormValid: true,
            };
          } else {
            return {
              ...state,
              formError: 'Please fill in all fields.',
              isFormValid: false,
            };
          }
      case 'UPDATE_SUBMITTED_STATUS':
        return {
          ...state,
          isSubmitted: action.payload
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  