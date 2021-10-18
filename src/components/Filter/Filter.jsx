import React from 'react';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';

import { Label, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by name
    <Input type="text" value={value} onChange={onChange} />
  </Label>
);

const mapStateToProps = ({ phonebook: { filter } }) => ({
  filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(phonebookActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
