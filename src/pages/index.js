import React from 'react'
import { i18n, withTranslation } from 'src/i18n'

class Homepage extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    }
  }

  render() {
    return (
      <>
        <div>{this.props.t('title')}</div>
        <button
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')}
        >
          Change locale
        </button>
      </>
    )
  }
}

export default withTranslation('common')(Homepage)