import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
// import Cookies from "universal-cookie";

import ChannellistContainer from "./components/ChannellistContainer";
import ChannelContainer from "./components/ChannellistContainer";

const apiKey = "1327914";
const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className="app_wrapper">
      <Chat client={client} theme="team light">
        <ChannellistContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
