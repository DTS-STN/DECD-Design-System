import React from "react";
import { ReviewSubmit } from "./ReviewSubmit";
import { Button } from "../Button/Button";

export default {
  title: "Components/ReviewSubmit",
  component: ReviewSubmit,
};

const Template2 = (args) => <ReviewSubmit {...args} />;
export const Default = Template2.bind({
  back_btn_onClick: () => {},
  submit_btn_onSubmit: () => {},
});

const Template = () => {
  const required_results = [
    { label: "Email address", value: "sam_smith@gmail.com" },
    { label: "Preferred language", value: "English" },
    { label: "Year of birth", value: "1973" },
  ];

  const optional_results = [
    { label: "What province or territory do you live in?", value: "Ontario" },
    {
      label: "Which term best describes your gender identity?",
      value: "Female",
    },
    {
      label:
        "Do you identify as Indigenous; that is First Nations, Métis, or Inuk (Inuit)?",
      value: "No",
    },
    { label: "Do you identify as a person with a disability?", value: "No" },
    {
      label: "Do you identify as a member of a visible minority in Canada?",
      value: "Yes",
    },
    {
      label: "What is your approximate annual household income (before taxes)?",
      value: "-",
    },
    { label: "Are you currently working as a public servant?", value: "No" },
  ];

  const required_children = required_results.map((option, index) => {
    return (
      <div className="ds-mb-24px">
        <p className="ds-body">{option.label}</p>
        <div className="ds-grid ds-grid-cols-2 md:ds-flex">
          <p className="ds-body-bold">{option.value}</p>
          <div className="md:ds-pl-12px ds-justify-self-end">
            <Button
              iconAltText="link"
              id={option.label + index}
              onClick={option.onClick}
              styling="none"
              className="ds-btn-review"
              text="Edit"
            />
          </div>
        </div>
      </div>
    );
  });

  const optional_children = optional_results.map((option, index) => {
    return (
      <div className="ds-mb-24px">
        <p className="ds-body">{option.label}</p>
        <div className="ds-grid ds-grid-cols-2 md:ds-flex">
          <p className="ds-body-bold">{option.value}</p>
          <div className="md:ds-pl-12px ds-justify-self-end">
            <Button
              iconAltText="link"
              id={option.label + index}
              onClick={option.onClick}
              styling="none"
              className="ds-btn-review"
              text="Edit"
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    <ReviewSubmit
      id="testingReview"
      required_children={required_children}
      optional_children={optional_children}
      back_btn_onClick={() => {}}
      submit_btn_onSubmit={() => {}}
    />
  );
};

export const ExampleChildren = Template.bind({});
ExampleChildren.args = {};