export const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "ADD_ITEM") {
    const newItem = [...state.people, action.payload];
    return {
      ...state,
      people: newItem,
      isModalOpen: true,
      modalContent: "Item added to list",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please enter something",
    };
  }
  if (action.type === "closeModal") {
    return { ...state, isModalOpen: false };
  }
  if (action.type === "REMOVE") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPeople, modalContent: 'item removed'
    };
  }
  throw new Error("invalid input");
};
