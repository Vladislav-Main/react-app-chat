import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { useNotificationStore } from '../../../store/useDialogsStore';

export const Conversation = (props) => {
  const { dialog_id } = props;

  const users = useNotificationStore((state) => state.users);
  const [currentMessageList, setCurrentMessageList] = useState([]);

  const messageList = useNotificationStore((state) => state.messageList);

  const reloadMessages = () => {
    const filterMsg = messageList.find(
      (message) => message.dialogId == dialog_id
    );

    if (filterMsg) {
      setCurrentMessageList(filterMsg.messages);
    }
  };
  useEffect(() => {
    reloadMessages();
  }, [messageList]);

  useEffect(() => {
    reloadMessages();
  }, []);

  return (
    <>
      <div className="content-block__title-column title-body">
        <div className="title-body__avatar-block">
          <img
            src={users[dialog_id].userAvatar}
            alt="avatar"
            className="title-body__avatar-img _avatar"
          />
        </div>
        <div className="title-body__name-block">
          <h2 className="title-body__user-name">{users[dialog_id].userName}</h2>
        </div>
      </div>
      <div className="content-block__content-column conversation-body">
        {currentMessageList.map((message) => {
          return message.messageSenderId === 'abc' ? (
            <div
              className="conversation-body__outcoming-message"
              key={message.messageId}
            >
              <div className="conversation-body__user-message outc-message">
                <div className="outc-message__message">
                  {message.messagesContent}
                </div>
                <div className="outc-message__date date">
                  <time className="date__message-income">
                    {moment
                      .unix(message.createdAt / 1000)
                      .format(' DD/MM/YY hh:mm a')}
                  </time>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="conversation-body__incoming-message"
              key={message.messageId}
            >
              <div className="conversation-body__user-avatar">
                <img
                  src={users[dialog_id].userAvatar}
                  alt="avatar"
                  className="conversation-body__image _avatar"
                />
              </div>
              <div className="conversation-body__user-message inc-message">
                <div className="inc-message__message">
                  {message.messagesContent}
                </div>
                <div className="inc-message__date date">
                  <time className="date__message-income">
                    {moment
                      .unix(message.createdAt / 1000)
                      .format(' DD/MM/YY hh:mm a')}
                  </time>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
