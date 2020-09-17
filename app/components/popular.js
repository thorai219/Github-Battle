import React from 'react'
import ReactDOM from 'react-dom'

function LanguagesNav ({ selected, onUpdateLanguages }) {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
    
  return (
    <ul className = 'flex-center'>
      {languages.map((language) => (
        <li ke y= {language}>
          <button 
            className = 'btn-clear nav-link'
            style = {language === selected ? { color: 'rgb(187, 46, 31)' } : null }
            onClick = {() => onUpdateLanguages(language)}
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default class Popular extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage : 'All'
    }

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage (selectedLanguage) {
    this.setState({
      selectedLanguage
    })
  }

  render() {
    const { selectedLanguage } = this.state;

    return (
      <React.Fragment>
        <LanguagesNav 
          selected = { selectedLanguage }
          onUpdateLanguages = { this.updateLanguage }
        />
      </React.Fragment>
    )
  }
}