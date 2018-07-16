import * as React from 'react';

export interface IButton {
  title: string;
}

export class Button extends React.Component<IButton, {}> {
  public render() {
    const { title } = this.props;
    return (
      <button>{title}</button>
    );
  }
}
