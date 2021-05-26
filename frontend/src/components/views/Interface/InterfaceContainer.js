import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Interface from './Interface'

const InterfaceContainer = ({
  activePage,
  name,
  openPublisherModal,
  rvnAddress
}) => {
  return <Interface
    activePage={activePage}
    name={name}
    openPublisherModal={openPublisherModal}
    rvnAddress={rvnAddress}
  />
}
InterfaceContainer.propTypes = {
  openPublisherModal: PropTypes.bool.isRequired
}

function mapStateToProps (state) {
  return {
    activePage: state.Interface.activePage,
    openPublisherModal: state.Publisher.openPublisherModal
  }
}

export default connect(mapStateToProps)(InterfaceContainer)
