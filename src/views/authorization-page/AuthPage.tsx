import React from 'react';
import '../../styles/global.scss'
import {
  LoadingOutlined
} from '@ant-design/icons';
import AuthRequest from '../../models/AuthRequestInterface';
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";

type PathParamsType = {
  param: string,
}
type PropsType = RouteComponentProps<PathParamsType> & {
  paramString: string,
}
class AuthPage extends React.Component<PropsType> {

  constructor(props: PropsType) {
    super(props)
    require('dotenv').config();
  }

  readonly USER: string = 'USER';

  componentDidMount() {
    this.signIn()
  }

  signIn() {
    fetch('https://api.github.com/user', {
      method: 'GET',
      headers: {
        "accept": "application/vnd.github.v3+json",
        "Authorization": `${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
      }
    })
      .then(res => {
        if (res.ok)
          res.json().then(user => {
            this.setUser(user)
            this.props.history.push("/home");
          })
      })
  }

  setUser(user: AuthRequest) {
    localStorage.setItem(this.USER, JSON.stringify(user))
  }

  render() {
    return (
      <div className="container">
        <LoadingOutlined className="spinner text-color" />
      </div>
    );
  }
};
export default withRouter(AuthPage);