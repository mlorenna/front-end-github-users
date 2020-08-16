import React from 'react';
import {
    LoadingOutlined
  } from '@ant-design/icons';
const AuthPage: React.FC<any> = (props: React.PropsWithChildren<any>) => {  
    return (
      <div>
        <LoadingOutlined/>
      </div>
    );
  };
  
  export default AuthPage;