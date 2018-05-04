import React from 'react'
import { Field } from 'redux-form'
import { constants } from 'config'
import './style.css'

interface HeaderPropsInterface {
  title: string
  pristine: boolean
  submitting: boolean
  handleSubmit: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined
  reset: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined
}

const renderErrors = ({ touched, error, warning }: any) => (
  touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))
)

const renderField = ({ input, label, type, meta }: any) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {renderErrors(meta)}
    </div>
  </div>
)

const renderSelectField = ({ metrics, input, label, meta }: any) => (
  <div>
    <label>{label}</label>
    <select {...input}>
      {
        metrics.map((metric: string, i: number) =>
        <option key={i} value={metric}>{metric}</option>)
      }
    </select>
    {renderErrors(meta)}
  </div>
)

const Header = ({ title, handleSubmit, pristine, reset, submitting }: HeaderPropsInterface) => (
  <div className="Map__Header__Component__wrapper">
    <form onSubmit={handleSubmit}>
      <span>{title.toUpperCase()}</span>
      <Field
        name="minDate"
        component={renderField}
        label="From"
        type="date"
      />
      <Field
        name="maxDate"
        component={renderField}
        label="To"
        type="date"
      />
      <span>
        <label>Metric</label>
        <span>
          <Field
            name="column"
            component={renderSelectField}
            metrics={title && constants.map.metrics[title]}
          />
        </span>
      </span>
      <span>
        <button
          type="submit"
          disabled={pristine || submitting}>Submit</button>
        <button
          type="button"
          disabled={pristine || submitting}
          onClick={reset}>Clear Values</button>
      </span>
    </form>
  </div>
)

export default Header
