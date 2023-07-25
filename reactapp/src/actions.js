export const updateFirstName = (firstName) => {
    return {
      type: 'UPDATE_FIRST_NAME',
      payload: firstName
    };
  };
  
  export const updateLastName = (lastName) => {
    return {
      type: 'UPDATE_LAST_NAME',
      payload: lastName
    };
  };
  
  export const updateEmail = (email) => {
    return {
      type: 'UPDATE_EMAIL',
      payload: email
    };
  };
  
  export const updatePhoneNumber = (phoneNumber) => {
    return {
      type: 'UPDATE_PHONE_NUMBER',
      payload: phoneNumber
    };
  };
  
  export const updateQuery = (query) => {
    return {
      type: 'UPDATE_QUERY',
      payload: query
    };
  };
  
  export const submitForm = () => {
    return {
      type: 'SUBMIT_FORM'
    };
  };
  
  export const updateSubmittedStatus = (status) => {
    return {
      type: 'UPDATE_SUBMITTED_STATUS',
      payload: status
    };
  };
  