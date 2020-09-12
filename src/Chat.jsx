import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SendSharpIcon from "@material-ui/icons/SendSharp";
import MicIcon from "@material-ui/icons/Mic";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar style={{ height: "45px", width: "45px" }} />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last Seen...</p>
        </div>
        <div className="chat___headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Vinita</span>
          this is a message
          <span className="chat__timestamp">
            {new Date().toLocaleTimeString()}
          </span>
        </p>
        <p className="chat__reciever chat__message">
          <span className="chat__name">Vinita</span>
          this is a message
          <span className="chat__timestamp">
            {new Date().toLocaleTimeString()}
          </span>
        </p>
      </div>

      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
          <input type="text" placeholder="Type a message" />
          <IconButton style={{ padding: "none" }}>
            <SendSharpIcon className="send__message" />
          </IconButton>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
