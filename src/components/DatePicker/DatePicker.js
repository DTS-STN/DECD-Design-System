/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from "prop-types";
import React from "react";
import dropdown from "../../assets/dropdown.svg";
import { Image } from "../Image/Image";
import { FormLabel } from "../FormLabel/FormLabel";
import { FormError } from "../FormError/FormError";
import "./styles.css";

export function DatePicker(props) {
  const {
    id,
    onMonthChange,
    onDayChange,
    onYearChange,
    hasDay,
    hasYear,
    maxDay,
    minYear,
    maxYear,
    hasLabel,
    hasError,
    formLabelProps,
    formErrorProps,
  } = props;
  // const date = new Date();

  // const dayLimit = new Date(
  //   date.getFullYear(),
  //   date.getMonth() + 1,
  //   0
  // ).getDate();

  return (
    <>
      {hasLabel ? (
        <FormLabel
          label={formLabelProps.label}
          required={formLabelProps.required}
          infoText={formLabelProps.infoText}
          helpText={formLabelProps.helpText}
        />
      ) : null}
      <div id={id} className="ds-relative ds-flex">
        <label id="date-month">
          <p className="ds-form-date">Month</p>
          <select
            id="datePickerMonth"
            onChange={onMonthChange}
            className="ds-w-165px ds-py-5px  ds-px-14px ds-date-text ds-border-1.5 ds-border-multi-neutrals-grey85a ds-rounded"
          >
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="Octorber">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <div className="dropdownPos">
            <Image
              alt="Default Image"
              id="image"
              className="ds-w-16px ds-h-10px"
              src={dropdown}
            />
          </div>
        </label>
        {hasDay ? (
          <div className="ds-flex ds-flex-col sm:ds-pl-24px ds-pl-8px">
            <p className="ds-form-date">Day</p>
            <input
              id="datePickerDay"
              type="number"
              min={"1"}
              max={maxDay}
              onChange={onDayChange}
              className="ds-w-46px sm:ds-w-68px ds-px-10px ds-rounded ds-date-text ds-border-1.5 ds-border-multi-neutrals-grey85a ds-py-5px "
            />
          </div>
        ) : null}
        {hasYear ? (
          <div className="ds-flex ds-flex-col sm:ds-pl-24px ds-pl-8px">
            <p className="ds-form-date">Year</p>
            <input
              id="datePickerYear"
              type="number"
              min={minYear}
              max={maxYear}
              onChange={onYearChange}
              className="ds-w-70px sm:ds-w-165px ds-py-5px ds-px-10px ds-rounded ds-date-text ds-border-1.5 ds-border-multi-neutrals-grey85a"
            />
          </div>
        ) : null}
      </div>
      {hasError ? (
        <FormError errorMessage={formErrorProps.errorMessage} />
      ) : null}
    </>
  );
}

DatePicker.defaultProps = {
  onMonthChange: () => {},
  onDayChange: () => {},
  onYearChange: () => {},
  hasDay: true,
  hasYear: true,
  hasError: false,
  hasLabel: false,
  maxDay: 31,
  minYear: 0,
  maxYear: 10000,
};

DatePicker.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string,

  onMonthChange: PropTypes.func,
  onDayChange: PropTypes.func,
  onYearChange: PropTypes.func,

  hasDay: PropTypes.bool,
  hasYear: PropTypes.bool,
  hasError: PropTypes.bool,
  hasLabel: PropTypes.bool,
  maxDay: PropTypes.number,
  minYear: PropTypes.number,
  maxYear: PropTypes.number,

  /**
   * Form Error Props
   */
  formErrorProps: PropTypes.shape({
    id: PropTypes.string,
    errorMessage: PropTypes.string,
  }),

  /**
   * Form Label Props
   */
  formLabelProps: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool,
    infoText: PropTypes.string,
    helpText: PropTypes.string,
  }),
};
