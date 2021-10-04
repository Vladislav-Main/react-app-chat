import React from 'react';
import { useRouteMatch } from 'react-router';

import unauthUser from '../../img/unauthorized-user.png';
import messages from '../../img/messages.png';
import { Dialogs } from './components/Dialogs';
import { SearchInput } from './components/SearchInput';
import { Messages } from './components/Messages';

export const Chats = () => {
  const {
    params: { dialog_id },
  } = useRouteMatch();

  return (
    <div className="wrapper">
      <div className="wrapper-body _container">
        <div className="wrapper-body__info-block">
          <div className="info-block__info-column main-info">
            <div className="main-info__avatar-block">
              <img
                src={unauthUser}
                alt="avatar"
                className="main-info__avatar-img _avatar"
              />
            </div>
            <SearchInput />
          </div>
          <div className="info-block__conversation-column conversation-info">
            <div className="conversation-info__title-column">
              <h2 className="conversation-info__title">Chats</h2>
            </div>
            <div className="conversation-info__chatting-column">
              <Dialogs />
            </div>
          </div>
        </div>
        {!dialog_id ? (
          <div className="wrapper-body__content-block no-content-block">
            <div className="no-content-block__img-block">
              <img
                src={messages}
                alt="messages"
                className="no-content-block__img"
              />
              <p className="no-content-block__text">
                Please choose dialog for chat
              </p>
            </div>
          </div>
        ) : (
          <div className="wrapper-body__content-block content-block ">
            <Messages key={dialog_id} dialog_id={dialog_id} />
          </div>
        )}
      </div>
    </div>
  );
};
