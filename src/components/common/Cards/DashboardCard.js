import React from "react";
import './DashboardCards.scss'

const DashboardCard = (props) => {

  let cardClasses = 'card dashboard-card ';
  if (props.className && props.className !== undefined && props.className !== '') {
    cardClasses += props.className;
  } else {
    cardClasses += 'bg-success text-white';
  }

  return (
    <React.Fragment>
      <div className={cardClasses}>
        <div className="cbody">
          <h3 className="heading">{props?.heading}</h3>
          <h4 className="subheading fw-bold">{props?.subheading}</h4>
          <div className="counts">{props?.counts ?? 0}</div>
        </div>
      </div>
    </React.Fragment>
  );

}

export default DashboardCard;