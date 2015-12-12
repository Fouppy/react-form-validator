import React, { Component, PropTypes } from "react"

import Field from "./Field"

export default class App extends Component {

    componentWillMount() {
      this.setState({
        errors: []
      })
    }

    submit() {
        let errors = []
        Object.keys(this.refs).map((ref, index) => {
            Object.keys(this.refs[ref].refs).map((r) => {
                switch (this.refs[ref].refs[r].type) {
                  case "select-one":
                    if (this.refs[ref].refs[r].value === "Rate the Product") {
                      errors.push("value between 1 & 5 is required")
                    } else {
                      errors.push("")
                    }
                    break;
                  case "textarea":
                    if (this.refs[ref].refs[r].value === "") {
                      errors.push("can't be empty")
                    } else {
                      errors.push("")
                    }
                    break;
                  case "email":
                    if (this.refs[ref].refs[r].value === "") {
                      errors.push("can't be empty")
                    } else if (!this.refs[ref].refs[r].value.match(`([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+`)) {
                      errors.push("email format control")
                    } else {
                      errors.push("")
                    }
                    break;
                  default:
                    break;
                }
            })
        })

        this.setState({
            errors: errors
        })
    }

  	render() {
        const {
            errors
        } = this.state

    		return (
      			<div>
                <form className="reviewForm">
                    <h4>Submit a Review</h4>
                    <Field
                        ref="Field1"
                        type="select"
                        error={errors[0]}
                        values={["Rate the Product", "1", "2", "3", "4", "5"]} />
                    <Field
                        ref="Field2"
                        type="textarea"
                        error={errors[1]}
                        values={["Write a short review of the product..."]} />
                    <Field
                        ref="Field3"
                        type="email"
                        error={errors[2]}
                        values={["kevin@brocantelab.com"]} />
                    <fieldset>
                        <input
                            type="submit"
                            value="Submit Review"
                            onClick={
                                (event) => {
                                    event.preventDefault()
                                    this.submit()
                                }
                            } />
                    </fieldset>
                </form>
      			</div>
    		)
  	}
}
