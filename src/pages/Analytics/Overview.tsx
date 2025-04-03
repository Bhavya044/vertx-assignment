import Chart from "../../components/Analytics/Overview/Chart";
import Demographics from "../../components/Analytics/Overview/Demographics";
import Insights from "../../components/Analytics/Overview/Insights";

const Overview = () => {
  return (
    <section className="space-y-6">
      <div className="text-[28px] font-extrabold hidden lg:block">
        {" "}
        Overview
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="sm:col-span-2">
          <Chart />
        </div>
        <div className="sm:col-span-3 lg:col-span-1">
          <Insights />
        </div>

        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
          <Demographics />
        </div>
      </div>
    </section>
  );
};

export default Overview;
