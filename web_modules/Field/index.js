import React, { Component, PropTypes } from "react"

import classNames from "classnames"

import styles from "./index.css"

export default class Field extends Component {

    setContent() {
        const {
          type,
          values,
          error
        } = this.props

        const inputClassName = classNames(styles.root, {
            [styles.error]: error !== ""
        })

        switch (type) {
            case "select":
                this.content =
                    <select
                        className={ inputClassName }
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
                        className={ inputClassName }
                        ref={ type }
                        placeholder={ values[0] }>
                    </textarea>
                break;
            case "email":
                this.content =
                    <input
                        className={ inputClassName }
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
                  <p className={ styles.errorText }>{ error }</p>
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
