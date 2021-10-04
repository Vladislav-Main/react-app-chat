import React from 'react';

import { Conversation } from './Conversation';
import { MessageForm } from './MessageForm';

export const Messages = (props) => {
  const { dialog_id } = props;
  return (
    <>
      <Conversation dialog_id={dialog_id} />
      <MessageForm dialog_id={dialog_id} />
    </>
  );
};
