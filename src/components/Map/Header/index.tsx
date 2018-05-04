import React from 'react'
import { Field } from 'redux-form'
import { constants } from 'config'
import './style.css'

interface HeaderPropsInterface {
  title: string
  pristine: boolean
  submitting: boolean
  handleSubmit: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined
}

const renderErrors = ({ touched, error, warning }: any) => (
  touched && ((error && <div className="hidden error">{error}</div>) ||
  (warning && <div className="hidden warning">{warning}</div>))
)

const renderField = ({ input, className, label, type, meta }: any) => (
  <div className={className}>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {renderErrors(meta)}
    </div>
  </div>
)

const renderSelectField = ({ metrics, className, input, label, meta }: any) => (
  <div className={className}>
    <label>{label}</label>
    <div>
      <select {...input}>
        {
          metrics.map((metric: string, i: number) =>
          <option key={i} value={metric}>{metric}</option>)
        }
      </select>
      {renderErrors(meta)}
    </div>
  </div>
)

const Header = ({ title, handleSubmit, pristine, submitting }: HeaderPropsInterface) => (
  <div className="Map__Header__Component__wrapper">
    <form onSubmit={handleSubmit} className="Map__Header__Component__form">
      <div className="Map__Header__Component__Form__title">
        {title.toUpperCase()}
      </div>
      <Field
        name="minDate"
        label="From"
        type="date"
        component={renderField}
        className="Map__Header__Component__Form__mindate"
      />
      <Field
        name="maxDate"
        label="To"
        type="date"
        component={renderField}
        className="Map__Header__Component__Form__maxdate"
      />
      <Field
        name="column"
        label="Metric"
        component={renderSelectField}
        metrics={constants.map.metrics[title || 'default']}
        className="Map__Header__Component__Form__metric"
      />
      <div className="Map__Header__Component__Form__submit">
        <button
          type="submit"
          disabled={pristine || submitting}>search</button>
      </div>
    </form>
  </div>
)

export default Header
