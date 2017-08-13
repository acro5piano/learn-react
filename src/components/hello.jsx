import React from 'react';

export default class Hello extends React.Component {
  constructor() {
    super()
    this.handleSend = this.handleSend.bind(this);

    this.state = {
      sum: 0,
      text: '',
      firstStep: true
    }
  }

  handleSend() {
    alert('Thanks')
    this.setState({firstStep: true, text: ''})
  }

  render() {
    if (this.state.firstStep) {
      return (
        <div className="input">
          <h1>入力 | お問い合わせ</h1>
          <div>
            <input type="text" value={this.state.text} onChange={event => this.setState({text: event.target.value})}></input>
          </div>
          <button className="button-primary" onClick={() => this.setState({firstStep: false})}>確認</button>
        </div>
      );
    }

    return (
      <div className="confirm">
        <h1>確認 | お問い合わせ</h1>
        Your inquiry:
        <p>{this.state.text}</p>
        <div className="row">
          <div className="two columns">
            <button onClick={() => this.setState({firstStep: true})}>Back</button>
          </div>
          <div className="two columns">
            <button className="button-primary" onClick={this.handleSend}>送信</button>
          </div>
        </div>
      </div>
    );
  }
}
