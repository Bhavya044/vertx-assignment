import Card from "../../UI/Card";
import Tag from "../../UI/Tag";
import CountryStats from "./CountryStats";
import Icon from "../../UI/Icon";

const Demographics = () => {
  return (
    <Card
      title="Demographics"
      action={
        <div>
          <Tag text="Visitors" className="text-left pr-12 pl-3 py-1" />
        </div>
      }
    >
      <div>
        <img
          src="/globe.png"
          alt="Globe Demographics"
          className="w-auto h-full max-w-full object-contain relative"
        />
        <CountryStats />
      </div>
      <div className="border-1 border-divider-100" />
      <div className="mt-5 flex justify-end items-center gap-3">
        <span className="text-[10px]">View detailed Insights</span>
        <Icon iconName="right-arrow" size={11} />
      </div>
    </Card>
  );
};

export default Demographics;
