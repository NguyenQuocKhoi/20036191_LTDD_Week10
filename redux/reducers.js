import { useState, useEffect } from "react";
const initialState = {
  tasks: [
    { id: 1, note:'go to lunch' },
    { id: 2, note:'go to shopping' },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE":
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.payload),
      };
    case "UPDATE":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          } else {
            return task;
          }
        }),
      };
    default:
      return state;
  }
};