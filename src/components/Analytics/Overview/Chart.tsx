import Card from "../../UI/Card";
import InfoCard from "../../UI/InfoCard";
import Tag from "../../UI/Tag";

const Chart = () => {
  return (
    <Card
      action={
        <div className="flex gap-1.5">
          <Tag text="Visitors" className=" text-left pr-12 pl-3 py-1" />
          <Tag text="Last 30 days" />
          <Tag text="+Add" className="border-dashed" />
        </div>
      }
    >
      <InfoCard
        additionalInfo="(000)"
        percentageChange="+469%"
        quantity="13.49K"
      />
      <img src="/overviewChart.png" />
    </Card>
  );
};

export default Chart;
