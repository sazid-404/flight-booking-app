import React from "react";
import { useDispatch } from "react-redux";
import { removeBooking } from "../Redux/bookingsReducer/actions";

const Item = ({ booking }) => {
  const dispatch = useDispatch();
  const { id, destinationFrom, destinationTo, journeyDate, guests, classType } =
    booking || {};

  return (
    <tr className="bookedTable text-black">
      <td className="px-6 py-4">
        <div className="flex items-center space-x-3">
          <p className="bookedFrom">
            {destinationFrom}
          </p>
        </div>
      </td>
      <td className="px-6 py-4">
        <p className="bookedTo">{destinationTo}</p>
      </td>
      <td className="px-6 py-4 text-center">
        <p className="bookedDate">{journeyDate}</p>
      </td>
      <td className="px-6 py-4 text-center">
        <p className="bookedGustes">{guests}</p>
      </td>
      <td className="px-6 py-4 text-center">
        <span className="bookedClass"> {classType} </span>
      </td>
      <td className="px-6 py-4 text-center">
        <div className="flex justify-center gap-4">
          <button
            className="remove"
            onClick={() => dispatch(removeBooking(id))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Item;
