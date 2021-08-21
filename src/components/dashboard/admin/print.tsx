// eslint-disable-next-line no-use-before-define
import React, { Component } from 'react'
import { render } from 'react-dom'
// eslint-disable-next-line no-unused-vars
import ReactToPrint from 'react-to-print'
import { ComponentToPrint } from './MarPdf'

export class Example extends React.PureComponent {
  componentRef!: Component<any, {}, any> | Element | null
  render () {
    return (
          <div>
            <ReactToPrint
              trigger={() => {
                // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                // to the root node of the returned component as it will be overwritten.
                return <a href="#">Print this out!</a>
              }}
              content={() => this.componentRef}
            />
            <ComponentToPrint ref={el => (this.componentRef = el)} />
          </div>
    )
  }
}
render(<Example />, document.querySelector('#root'))
