import { ADD_BOOKING, REMOVE_BOOKING } from "./actionTypes";

const initialState = {
  bookings: [
    {
      id: 1,
      destinationFrom: "Pabna",
      destinationTo: "Dhaka",
      journeyDate: "2025-01-01",
      guests: 2,
      classType: "Economy",
    },
  ],
};

// Helper function to generate unique IDs
const generateId = (bookings) => {
  return bookings.length > 0 ? Math.max(...bookings.map((b) => b.id)) + 1 : 1;
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      // Restrict to max 3 bookings
      if (state.bookings.length >= 3) {
        return state;
      }

      // Check if booking already exists (same route & date)
      const exists = state.bookings.some(
        (b) =>
          b.destinationFrom === action.payload.destinationFrom &&
          b.destinationTo === action.payload.destinationTo &&
          b.journeyDate === action.payload.journeyDate &&
          b.classType === action.payload.classType
      );

      if (exists) {
        return state; // Prevent duplicate bookings
      }

      return {
        ...state,
        bookings: [
          ...state.bookings,
          {
            id: generateId(state.bookings),
            ...action.payload,
          },
        ],
      };

    case REMOVE_BOOKING:
      return {
        ...state,
        bookings: state.bookings.filter(
          (booking) => booking.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default bookingReducer;
