import PropTypes from "prop-types";
import React from "react";
import "./styles.css";

export function NestedTabs(props) {
  const { id, tabs } = props;

  const [toggleState, setToggleState] = React.useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div id={id} className="ds-flex ds-flex-col">
      <div className="ds-flex ds-flex-row">
        {tabs.map((tab, index) => {
          return (
            <div className="ds-border-b-0 ds-border ds-border-multi-neutrals-grey90 ds-w-134px ds-bg-multi-blue-blue2 ds-mr-10px">
              <button
                className={
                  toggleState === index + 1 ? "tabs active-tabs" : "tabs"
                }
                onClick={() => toggleTab(index + 1)}
              >
                {tab.title}
              </button>
            </div>
          );
        })}
      </div>
      <div className="ds-border ds-border-multi-neutrals-grey90">
        {tabs.map((tab, index) => {
          return (
            <div className="">
              <div
                className={
                  toggleState === index + 1
                    ? "content  active-content"
                    : "content"
                }
              >
                {tab.children}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

NestedTabs.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string,

  /**
   *  card props:
   *
   *  id: id of the given tab
   *
   *  title: heading of the given tab
   *
   *  children: code passed in to fill the given tab
   *
   * */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
      ]),
    })
  ),
};
