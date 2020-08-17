import React from 'react';
import '../../styles/global.scss'
import MainCard from './main-card/MainCard';
const UserInfoPage: React.FC<any> = (props: React.PropsWithChildren<any>) => {  
    return (
      <div className="container">
        <MainCard></MainCard>
      </div>
    );
  };
  
  export default UserInfoPage;