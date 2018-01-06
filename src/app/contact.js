import React from 'react';
import clipboard from 'clipboard';

export default class Contact extends React.Component {
  componentDidMount() {
    let c = new clipboard('#email');
    c.on('success', (e) => {
      let toast = document.getElementById('toast');
      toast.innerHTML = 'Copied email to your clipboard!';
      toast.style.display = 'block';
      setTimeout(() => {
        toast.innerHTML = '';
        toast.style.display = 'none';
      }, 3000)
    });
  }

  render() {
    return (
      <a id="email" data-clipboard-text="me@brandontruong.com">contact</a>
    )
  }
}
