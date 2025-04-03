import Card from "../../UI/Card";
import Tag from "../../UI/Tag";
import CountryStats from "./CountryStats";
import CountrySelector from "./CountrySelector";

const Demographics = () => {
  return (
    <Card
      title="Demographics"
      action={
        <Tag
          text="Visitors"
          className="lg:hidden block text-left pr-12 pl-3 py-1"
        />
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4">
        <div className="relative col-span-1 md:col-span-1 lg:col-span-2 flex justify-center">
          <img
            src="/globe.png"
            alt="Globe Demographics"
            className="w-full max-h-56 h-full object-contain lg:w-auto lg:max-w-xl"
          />
          <CountrySelector />
        </div>

        <div className="col-span-1 md:col-span-1 lg:col-span-1 flex justify-center items-center">
          <CountryStats />
        </div>
      </div>
    </Card>
  );
};

export default Demographics;
