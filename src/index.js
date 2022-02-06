import React from 'react';
import ReactDOM from 'react-dom';
import App from './componets/1functional_stateless/App';
import UIComponent1 from "./componets/1functional_stateless/UIComponent1";
import UserComponentEntity from "./componets/1functional_stateless/UserComponentEntity";
import MyFunctionalComponent from "./componets/1functional_stateless/MyFunctionalComponent";

ReactDOM.render(
  <>
    <App />
      <UIComponent1/>
      <UserComponentEntity/>
      <MyFunctionalComponent/>
  </>,
  document.getElementById('root')
);

