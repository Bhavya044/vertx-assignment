import Card from "../../UI/Card";
import Tag from "../../UI/Tag";
import InfoCard from "../../UI/InfoCard";
import Icon from "../../UI/Icon";

const Insights = () => {
  return (
    <Card
      action={
        <div className="flex gap-1.5">
          <Tag text="Visitors" className=" text-left pr-12 pl-3 py-1" />
        </div>
      }
      className="lg:min-h-[309px]"
      title="Insights"
    >
      <div className="flex lg:flex-col flex-row lg:gap-3  justify-between">
        <InfoCard
          title="Founders"
          additionalInfo="(000)"
          percentageChange="+469%"
          quantity="13.49K"
        />
        <InfoCard
          title="Investors"
          additionalInfo="(000)"
          percentageChange="+469%"
          quantity="6.49K"
        />
      </div>
      <div className="border-1 border-divider-100" />
      <div className="mt-3 flex justify-end items-center gap-3">
        <span className="text-[10px]">View detailed Insights</span>
        <Icon iconName="right-arrow" size={14} />
      </div>
    </Card>
  );
};

export default Insights;
