import React from 'react';
import PropTypes from 'prop-types';

class ContactoStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacto: props.contacto
    }
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        contacto: {
          ...prevState.contacto,
          conectado: !prevState.contacto.conectado
        }
      }
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.contacto.conectado ? "Contacto En Línea" : "Contacto No Disponible"}</p>
        <button onClick={this.handleClick}>Cambiar Estado</button>
      </div>
    )
  }
}

ContactoStatus.propTypes = {
  contacto: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    conectado: PropTypes.bool.isRequired
  }).isRequired
};

export default ContactoStatus;
