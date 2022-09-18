import React, { useEffect, useContext } from 'react';
import {
  bool, func, number, oneOf, string,
} from 'prop-types';
import * as EmailValidator from 'email-validator';
import ContentEditable from 'react-contenteditable';

import useInput from '../hooks/useInput';
import LocaleContext from '../contexts/LocaleContext';

import '../styles/input-string.css';

function InputString({
  type, placeholder, title, className, containerClassName, value,
  isRequired, minLength, maxLength, compareWith, compareInvalidMessage, callback,
}) {
  const { getString } = useContext(LocaleContext);

  const [inputValue, onInputChange] = useInput({
    defaultValue: value,
    maxLength,
  });

  const invalidMessages = {
    required: getString(20),
    email: getString(21),
    minLength: `minimum: ${minLength} ${getString(22)} (${getString(23)}: ${inputValue.length} ${getString(22)})`,
    compare: compareInvalidMessage,
  };

  let activeInvalidMessage = null;

  if (compareWith !== null) {
    if (inputValue !== compareWith) {
      activeInvalidMessage = invalidMessages.compare;
    }
  }
  if (type === 'email') {
    if (!EmailValidator.validate(inputValue)) {
      activeInvalidMessage = invalidMessages.email;
    }
  }
  if (minLength !== null) {
    if (inputValue.length < minLength) {
      activeInvalidMessage = invalidMessages.minLength;
    }
  }
  if (isRequired) {
    if (inputValue.length <= 0) {
      activeInvalidMessage = invalidMessages.required;
    }
  }

  const newClassName = `input-string input-string--${type} ${className} ${activeInvalidMessage !== null ? 'input-string--invalid' : ''} ${maxLength !== null ? 'input-string--with-badge' : ''}`;

  let inputElement = null;

  if (type === 'contenteditable') {
    inputElement = (
      <ContentEditable
        className={newClassName}
        html={inputValue}
        data-placeholder={placeholder}
        spellCheck={false}
        onChange={onInputChange}
        {...{ title }}
      />
    );
  } else {
    inputElement = (
      <input
        className={newClassName}
        value={inputValue}
        placeholder={placeholder}
        spellCheck={false}
        onChange={onInputChange}
        {...{ type, title }}
      />
    );
  }

  const invalidMessageElement = (
    <span
      className={`input-string__invalid-message ${activeInvalidMessage !== null ? 'input-string__invalid-message--visible' : ''}`}
    >
      {activeInvalidMessage ? `*${activeInvalidMessage}` : ''}
    </span>
  );

  const maxLengthBadgeElement = (
    <span
      className="input-string__max-length-badge"
    >
      {inputValue.length}
      /
      {maxLength}
    </span>
  );

  const elementToRender = (
    <div className={`input-string-container ${containerClassName}`}>
      {inputElement}
      {invalidMessageElement}
      {maxLength !== null && maxLengthBadgeElement}
    </div>
  );

  useEffect(() => {
    if (callback !== null) {
      callback({
        value: inputValue,
        isValid: activeInvalidMessage === null,
      });
    }
  }, [callback, inputValue, activeInvalidMessage]);

  return elementToRender;
}

InputString.propTypes = {
  type: oneOf([
    'text', 'email', 'password', 'search', 'contenteditable',
  ]).isRequired,
  placeholder: string.isRequired,
  title: string.isRequired,
  className: string,
  containerClassName: string,
  value: string,
  isRequired: bool,
  minLength: number,
  maxLength: number,
  compareWith: string,
  compareInvalidMessage: string,
  callback: func,
};

InputString.defaultProps = {
  className: '',
  containerClassName: '',
  value: '',
  isRequired: false,
  minLength: 0,
  maxLength: null,
  compareWith: null,
  compareInvalidMessage: '',
  callback: null,
};

export default InputString;
