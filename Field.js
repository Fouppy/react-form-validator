import React, { Component, PropTypes } from "react"

export default class Field extends Component {
  	constructor() {
  		  super()
  	}

    setContent() {
        const {
          type,
          values
        } = this.props

        switch (type) {
            case "select":
                this.content =
                    <select
                        ref={ type }>
                    {
                        values.map((value, index) => {
                            return (
                                <option
                                    value={ value }
                                    key={ index }>
                                { value }</option>
                            )
                        })
                    }
                    </select>
                break;
            case "textarea":
                this.content =
                    <textarea
                        ref={ type }
                        placeholder={ values[0] }>
                    </textarea>
                break;
            case "email":
                this.content =
                    <input
                        type="email"
                        ref={ type }
                        placeholder={ values[0] } />
                break;
            default:
                break;

        }
    }

  	render() {

        const {
          error
        } = this.props

        this.setContent()

    		return (
            <fieldset>
                { this.content }
                {
                  error !== "" &&
                  <p>{ error }</p>
                }
            </fieldset>
    		)
  	}
}

Field.defaultProps = {
	type: "",
  error: "",
  values: []
}

Field.propTypes = {
  type: PropTypes.string,
	error: PropTypes.string,
  values: PropTypes.array
}
