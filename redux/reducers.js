const initialState = {
  notes: [
    {
      id: 1,
      name: "khoi",
      note: "go to lunch",
    },
    {
      id: 2,
      name: "khoi1",
      note: "go to lunch1",
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case "DELETE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case "UPDATE":
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.id === action.payload.id) {
            return action.payload;
          } else {
            return note;
          }
        }),
      };

    default:
      return state;
  }
};
