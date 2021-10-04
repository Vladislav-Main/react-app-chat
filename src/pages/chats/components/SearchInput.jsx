import React from 'react';

import { useNotificationStore } from '../../../store/useDialogsStore';

export const SearchInput = () => {
  return (
    <div className="main-info__search-block">
      <div className="main-info__search">
        <input
          type="text"
          className="main-info__search-input"
          placeholder="Search or start new chats..."
          onChange={(e) =>
            useNotificationStore.getState().setSearchTerm(e.target.value)
          }
        />
      </div>
    </div>
  );
};
