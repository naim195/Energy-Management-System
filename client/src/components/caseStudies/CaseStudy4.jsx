const CaseStudy3 = () => {
  return (
    <div className="p-6 space-y-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-primary">
        Peak Demand Forecasting
      </h1>

      {/* Section 1: Gujarat Peak Demand */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex">
            <div className="flex justify-center">
              <img
                src="/assets/CaseStudy4/Gujarat_forecast.png"
                alt="Village"
                className="w-full h-full rounded-lg shadow-md"
              />
            </div>
          </div>
          <p className="mt-4">
            The graph shows the peak power demand met during the day
            for the Gujarat state is forecasted in millions of watts
            (MW) from 2024 to 2026 based on the peak power demand met
            during the day from 2013 to 2023. Black dots represent the
            original peak power demand data, while blue lines
            represent forecasted peak power demand.
          </p>
        </div>
      </div>

      {/* Section 2: Maharashtra Peak Demand */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex">
            <div className="flex justify-center">
              <img
                src="/assets/CaseStudy4/Maharashtra_forecast.png"
                alt="Village"
                className="w-full h-full rounded-lg shadow-md"
              />
            </div>
          </div>
          <p className="mt-4">
            The graph shows the peak power demand met during the day
            for the Tamil Nadu state is forecasted in millions of
            watts (MW) from 2024 to 2026 based on the peak power
            demand met during the day from 2013 to 2023. Black dots
            represent the original peak power demand data, while blue
            lines represent forecasted peak power demand.
          </p>
        </div>
      </div>

      {/* Section 3: Tamil Nadu Peak Demand */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex">
            <div className="flex justify-center">
              <img
                src="/assets/CaseStudy4/Tamil_Nadu_forecast.png"
                alt="Village"
                className="w-full h-full rounded-lg shadow-md"
              />
            </div>
          </div>
          <p className="mt-4">
            The graph shows the peak power demand met during the day
            for the Maharashtra state is forecasted in millions of
            watts (MW) from 2024 to 2026 based on the peak power
            demand met during the day from 2013 to 2023. Black dots
            represent the original peak power demand data, while blue
            lines represent forecasted peak power demand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy3;
