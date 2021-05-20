import { Component } from 'react';
import './App.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';
import { connect } from 'react-redux';
import { getContact } from './Redux/Phonebook/operationsApi';
import { getLoading } from './Redux/Phonebook/phonebook-selectors';
class App extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return (
      <div>
        <div>
          <h1>
            Phonebook
            {this.props.isLoading && <CircularProgress color="secondary" />}
          </h1>

          <ContactForm />
        </div>
        <Filter />
        <ContactList />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(getContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
