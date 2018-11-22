import React from 'react';
import styled from 'react-emotion';

interface SearchBarProps {
  onChange: (value: string) => void;
}

const Input = styled('input')`
  background: #fff;
  font-size: 32px;
  color: #545e6f;
  border: none;
  padding: 30px 40px;
  outline: none;
  width: 100%;
`;

export class SearchBar extends React.Component<SearchBarProps> {
  ref: HTMLInputElement;

  componentDidMount() {
    // auto focus input on mount
    this.ref.focus();
  }

  private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    this.props.onChange(value);
  }

  render() {
    return (
      <Input
        innerRef={(ref) => this.ref = ref}
        placeholder="Search characters..."
        onChange={(event) => this.handleChange(event)}
      />
    );
  }
}
