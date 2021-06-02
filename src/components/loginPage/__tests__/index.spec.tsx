import { render } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoginPage } from '..';
import { expectInDocByTestId, expectInnerHTMLByTestId, clickNavigateByTestId, expectInnerHTMLByRole } from '../../../utils/test';

const renderInitialTestDOM = () => render(
  <Router>
    <Switch>
      <Route exact path="/" component={LoginPage} />
    </Switch>
  </Router>
);

const renderNavigationTestDOM = () => render(
  <Router>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/auth/signup" component={() => <div/>} />
    </Switch>
  </Router>
);

describe('<LoginPage/>', () => {
  describe('Rendering', () => {
    beforeEach(renderInitialTestDOM);

    it('Should render the <LoginPageContainer/>', () =>
      expectInDocByTestId("loginPageContainer"));

    it('Should render the <LoginFormContainer/>', () =>
      expectInDocByTestId("loginFormContainer"));

    it('Should render the <LoginFormContainerRight/>', () =>
      expectInDocByTestId("loginFormContainerRight"));

    it('Should render the <LoginFormContainerLeft/>', () =>
      expectInDocByTestId("loginFormContainerLeft"));

    it('Should render the <LoginForm/>', () =>
      expectInDocByTestId("LoginForm"));

    it('Should render an <h2/> with innerHTML equal to "Not Registered Yet?', () =>
      expectInnerHTMLByTestId("loginPageInfoHeading", "Not Registered Yet?"));

    it('Should render a <p/> with innerHTML equal to "Registering for your account is quick and easy', () =>
      expectInnerHTMLByTestId("loginPageInfoContent", "Registering for your account is quick and easy"));

    it('Should render a <button/> with innerHTML equal to "CREATE ACCOUNT"', () =>
      expectInnerHTMLByRole("createAccountButton", "CREATE ACCOUNT")); 
  });
  
  describe('navigation', () => {
    beforeEach(renderNavigationTestDOM);

    it('Should navigate to "/auth/signup" when the "CREATE ACCOUNT" button is clicked', () =>
      clickNavigateByTestId("ca-btn", "/auth/signup"));
  });
});