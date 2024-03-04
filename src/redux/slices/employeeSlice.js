import {createSlice} from '@reduxjs/toolkit';

export const employeeSlice = createSlice({
  name: 'employeeSlice',
  initialState: {
    token: '',
    user: null,
    userValues: {
      follow_request_status: false,
      notification_count: 0,
    },
    notification: null,
    emergencyDetails: null,
    role: '',
  },
  reducers: {
    saveToken: (state, action) => {
      return {...state, token: action?.payload};
    },
    saveUser: (state, action) => {
      return {...state, user: action?.payload};
    },
    saveRole: (state, action) => {
      return {...state, role: action?.payload};
    },
    saveNotifications: (state, action) => {
      return {...state, notification: action?.payload};
    },
    saveUserValues: (state, action) => {
      return {...state, userValues: {...state?.userValues, ...action?.payload}};
    },
    saveEmergencyDetails: (state, action) => {
      return {...state, emergencyDetails: action?.payload};
    },
    removeEmployee: (state, action) => {
      return {
        token: '',
        user: null,
        emergencyDetails: null,
      };
    },
  },
});

export const {
  saveToken,
  saveUser,
  saveRole,
  saveNotifications,
  saveEmergencyDetails,
  removeEmployee,
  saveUserValues,
} = employeeSlice.actions;

export default employeeSlice.reducer;
