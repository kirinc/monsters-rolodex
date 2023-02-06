import React, { Component } from 'react'
import './search-box.style.css'

export default class SearchBox extends Component {
  render() {
    const {className, onSearchBox, placeholder} = this.props;
    return (
        <input 
        className={`search-box ${className}`} 
        type="search" 
        placeholder={placeholder} 
        onChange={onSearchBox}/>
    )
  }
}
