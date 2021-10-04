import React, { useState } from 'react';

import plane from '../../../img/paper plane.png';
import { fetchNorris } from '../../../services/fetchNorris';
import { useNotificationStore } from '../../../store/useDialogsStore';

export const MessageForm = ({ dialog_id }) => {
  const [value, setValue] = useState('');

  const messageFromNorris = async () => {
    let msg = await fetchNorris();
    if (msg) {
      const message_norris = {
        messageId: Date.now(),
        messagesContent: msg,
        createdAt: Date.now(),
        messageSenderId: dialog_id,
      };
      useNotificationStore.getState().sendMessage(dialog_id, message_norris);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();
    if (text.length > 0) {
      const new_message = {
        messageId: new Date().getTime(),
        messagesContent: text,
        createdAt: new Date().getTime(),
        messageSenderId: 'abc',
      };
      useNotificationStore.getState().sendMessage(dialog_id, new_message);

      setTimeout(messageFromNorris, 5000);
    }

    setValue('');
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="content-block__message-column message-body">
      <form className="message-body__msg-block" onSubmit={handleSubmit}>
        <input
          type="text"
          className="message-body__msg-input"
          placeholder="Type your message"
          value={value}
          onChange={handleChange}
        />
        <div className="message-body__button-column button-column">
          <input
            type="image"
            src={plane}
            alt="paper plane"
            className="button-column__msg-button"
          ></input>
        </div>
      </form>
    </div>
  );
};
