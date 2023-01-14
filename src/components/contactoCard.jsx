import React from 'react';
import Contacto from './contacto';
import ContactoStatus from './contactoStatus';
import PropTypes from 'prop-types';

class ContactoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacto: new Contacto(props.nombre, props.apellido, props.email, props.conectado)
    }
  }

  render() {
    return (
      <div>
        <p>Nombre: {this.state.contacto.nombre}</p>
        <p>Apellido: {this.state.contacto.apellido}</p>
        <p>Email: {this.state.contacto.email}</p>
        <ContactoStatus contacto={this.state.contacto} />
      </div>
    )
  }
}

ContactoCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  conectado: PropTypes.bool.isRequired
};

export default ContactoCard;
