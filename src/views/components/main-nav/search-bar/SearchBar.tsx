import React from 'react';
import './SearchBar.scss'
import {
    SearchOutlined
} from '@ant-design/icons';
const SearchBar: React.FC<any> = (props: React.PropsWithChildren<any>) => {
    return (
        <div className="search-bar">
            <input className="inner" list="data-search" type="search" />
            <SearchOutlined />
            <datalist id="data-search">
                <option value="Chocolate" />
                <option value="Coconut" />
                <option value="Mint" />
                <option value="Strawberry" />
                <option value="Vanilla" />
            </datalist>
        </div>
    )
}

export default SearchBar