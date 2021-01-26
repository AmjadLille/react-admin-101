import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser, Create } from 'react-admin';
import dataProvider from './dataProvider';
import { CharacterCreate } from "./characters"

const App = () => <Admin dataProvider={dataProvider}>
  <Resource name="users" list={ListGuesser} edit={EditGuesser} />
  <Resource name="characters" list={ListGuesser} edit={EditGuesser} create={CharacterCreate} />
</Admin>;

export default App;