import React from 'react';
import './MainNav.scss'
import SearchBar from './search-bar/SearchBar'
import Avatar from '../avatar/Avatar'

class MainNav extends React.Component {

    user: any = this.getStorage()

    getStorage() {
        let userInfo: any = localStorage.getItem("USER")
        return JSON.parse(userInfo)
    }

    render() {
        return (
            <div className="nav-bar">
                <div className="content">
                    <SearchBar />
                    <div className="avatar-container">
                        <Avatar url={this.user.avatar_url}/>
                        <span className="avatar-username-text">{this.user.name}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainNav