import * as React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
// import * as RAdmin from "react-admin/lib"
import jsonServerProvider from 'ra-data-json-server';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import Dashbaord from './components/home/dashboard';
import { UserList } from './components/user/user-list';
import { PostList, PostEdit, PostCreate } from './components/post/post-list';

import Routes from './components/routes';

import authProvider from './auth-provider';

const dataProviderURL =
  process.env.NODE_ENV == 'production'
    ? 'https://jsonplaceholder.typicode.com'
    : 'http://jsonplaceholder.typicode.com';
const dataProvider = jsonServerProvider(dataProviderURL);
const App: React.FC = () => (
  <Admin
    customRoutes={Routes}
    dashboard={Dashbaord}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;
