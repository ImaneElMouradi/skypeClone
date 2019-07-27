import { createStore } from "redux";

import rootReducer from "./reducers";

const initialStore = {
  user: {
    name: "imane",
    email: "fml@gmail.com",
    status: "online",
    user_id: 1
  },
  contacts: [
    {
      name: "thomas",
      email: "thomas@gmail.com",
      status: "busy",
      user_id: 2
    },
    {
      name: "antoine",
      email: "antoine@gmail.com",
      status: "busy",
      user_id: 3
    }
  ],
  conversations: [
    {
      contact_id: 2,
      messages: [
        {
          text: "slt",
          time: ""
        },
        {
          text: "smd",
          time: ""
        }
      ]
    }
  ]
};

const store = createStore(rootReducer, initialState);
export default store;
