import React from 'react';
import DashboardCard from '../components/common/Cards/DashboardCard';
import DashboardLayout from '../_layouts/DashboardLayout';

const cardsData = [
  {
    heading: "Total",
    subheading: "Out Patients (OP)",
    counts: "4534543",
    className: 'bg-primary text-white'
  },
  {
    heading: "Total",
    subheading: "Out Patients (IP)",
    counts: "4453455",
    className: 'bg-secondary text-white'
  },
  {
    heading: "Total",
    subheading: "Patients (Male)",
    counts: "345345",
    className: 'bg-success text-white'
  },
  {
    heading: "Total",
    subheading: "Patients (Female)",
    counts: "44545",
    className: 'bg-danger text-white'
  },
  {
    heading: "Total",
    subheading: "Doctors",
    counts: "30",
    className: 'bg-info text-white'
  },
  {
    heading: "Total",
    subheading: "Reports",
    counts: "4455",
    className: 'bg-dark text-white'
  },
  {
    heading: "Total",
    subheading: "Users",
    counts: "5",
    className: 'bg-warning text-dark'
  },
]

const DashboardPage = (props) => {

  return (
    <>
      <DashboardLayout heading="Patients Details">
        <div className="row gx-3">

          {cardsData && cardsData.length > 0 && cardsData.map((card, idx) =>
            <div className="col-12 col-sm-4 col-md-3" key={idx + 1}>
              <DashboardCard
                className={card.className}
                heading={card.heading}
                subheading={card.subheading}
                counts={card.counts}
              />
            </div>
          )}

        </div>
        <hr />
      </DashboardLayout>
    </>
  )
}

export default DashboardPage;