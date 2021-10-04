import create from 'zustand';
import { combine } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';
import _ from 'lodash';
import { defaultValues } from './defaultValues';
const local_storage_key = 'dialogskey';

const getDefaultValues = () => {
  try {
    let t = localStorage.getItem(local_storage_key) || '';
    if (t) {
      return JSON.parse(t);
    }
    return defaultValues;
  } catch {
    return defaultValues;
  }
};

export const useNotificationStore = create(
  devtools(
    combine(getDefaultValues(), (set) => ({
      setSearchTerm: (v) => {
        return set({ searchTerm: v });
      },
      clear: () => {
        return set({ messageList: [] });
      },
      sendMessage: (dialog_id, new_message) => {
        return set((state) => {
          const msgClone = _.cloneDeep(state.messageList);
          const msgIndex = _.findIndex(
            msgClone,
            (a) => a.dialogId == dialog_id
          );

          const dialogsClone = _.cloneDeep(state.dialogsList);
          const dialogIndex = _.findIndex(
            dialogsClone,
            (a) => a.userId == dialog_id
          );

          if (msgIndex > -1 && dialogIndex > -1) {
            msgClone[msgIndex].messages.push(new_message);
            dialogsClone[dialogIndex].lastMessage = new_message;
            try {
              localStorage.setItem(
                local_storage_key,
                JSON.stringify({
                  ...state,
                  searchTerm: '',
                  dialogsList: dialogsClone,
                  messageList: msgClone,
                })
              );
            } catch {}
            return {
              ...state,
              dialogsList: dialogsClone,
              messageList: msgClone,
            };
          }
          try {
            localStorage.setItem(
              local_storage_key,
              JSON.stringify({
                ...state,
                searchTerm: '',
              })
            );
          } catch {}
          return state;
        });
      },
    }))
  )
);
