import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import _ from 'lodash';
import moment from 'moment';

import { useNotificationStore } from '../../../store/useDialogsStore';

export const Dialogs = () => {
  let dialogsArr = useNotificationStore((state) => state.dialogsList);
  const users = useNotificationStore((state) => state.users);
  const searchTerm = useNotificationStore((state) => state.searchTerm);
  const [dialogs, setDialogs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let copy = _.cloneDeep(dialogsArr);

    let f = searchTerm.toLowerCase();
    if (searchTerm) {
      let usersIds = Object.values(users)
        .filter((v) => v.userName.toLowerCase().includes(f))
        .map((v) => {
          return v.id;
        });

      copy = copy.filter((dialog) => {
        return usersIds.includes(dialog.userId);
      });
    }

    copy.sort((a, b) => {
      if (a.lastMessage && b.lastMessage) {
        if (a.lastMessage.createdAt < b.lastMessage.createdAt) return 1;
        if (a.lastMessage.createdAt > b.lastMessage.createdAt) return -1;
      } else {
        if (a.lastMessage && !b.lastMessage) return 1;
        if (!a.lastMessage && b.lastMessage) return -1;
      }
      return 0;
    });
    setDialogs(copy);
  }, [dialogsArr, users, searchTerm]);

  return dialogs.map((item) => {
    return (
      <button
        className="conversation-info__card-body card-body"
        key={item.userId}
        onClick={() => {
          history.push(`/${item.userId}`);
        }}
      >
        <div className="card-body__img-column card-avatar">
          <img
            src={users[item.userId].userAvatar}
            alt="avatar"
            className="card-avatar__avatar-img _avatar"
          />
        </div>
        <div className="card-body__info-column card-user-info">
          <div className="card-user-info__user-name">
            {users[item.userId].userName}
          </div>
          <div className="card-user-info__user-conversation">
            {item.lastMessage.messagesContent}
          </div>
        </div>
        <div className="card-body__date-column date-info">
          <time className="date-info__date">
            {moment.unix(item.lastMessage.createdAt / 1000).format('LL')}
          </time>
        </div>
      </button>
    );
  });
};
