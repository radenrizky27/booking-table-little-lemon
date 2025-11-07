import { renderHook, act } from "@testing-library/react";
import { useReducer } from "react";

describe("Reducer functions", () => {
  const initializeTimes = () => [
    "17:00", "17:30", "18:00", "18:30", "19:00",
    "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"
  ];

  const updateTimes = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return initializeTimes();
      default:
        return state;
    }
  };

  test("initializeTimes returns the correct list of times", () => {
    const result = initializeTimes();
    expect(result).toEqual([
      "17:00", "17:30", "18:00", "18:30", "19:00",
      "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"
    ]);
  });

  test("updateTimes returns the same state when UPDATE_TIMES is dispatched", () => {
    const { result } = renderHook(() =>
      useReducer(updateTimes, [], initializeTimes)
    );
    const [initialState, dispatch] = result.current;

    act(() => {
      dispatch({ type: "UPDATE_TIMES" });
    });

    const [newState] = result.current;
    expect(newState).toEqual(initializeTimes());
    expect(newState).not.toBe(initialState);
  });

  test("updateTimes returns the same state for unknown actions", () => {
    const currentState = ["17:00", "18:00"];
    const action = { type: "UNKNOWN_ACTION" };
    const result = updateTimes(currentState, action);
    expect(result).toEqual(currentState);
  });
});
