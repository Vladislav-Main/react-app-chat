import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Chats } from '../pages/chats/Chats';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/:dialog_id?" component={Chats} />
    </Switch>
  );
};
