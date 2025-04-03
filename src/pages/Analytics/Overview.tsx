import Chart from "../../components/Analytics/Overview/Chart";
import Demographics from "../../components/Analytics/Overview/Demographics";
import Insights from "../../components/Analytics/Overview/Insights";

const Overview = () => {
  return (
    <div className="flex flex-col gap-3">
      <Chart />
      <Insights />
      <Demographics />
    </div>
  );
};

export default Overview;
