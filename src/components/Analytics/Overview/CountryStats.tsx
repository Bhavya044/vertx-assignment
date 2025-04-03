import { countryData } from "../../../utils/helper.config";
import Icon from "../../UI/Icon";

const CountryStats = () => {
  return (
    <div className="w-full lg:mt-[-20px] lg:p-2 flex flex-col gap-4 rounded-lg">
      {countryData.map(({ country, flag, percentage, color }) => (
        <div key={country} className="flex items-center gap-4">
          <img
            src={flag}
            alt={country}
            className="w-10 h-6 rounded-sm object-cover"
          />

          <div className="flex flex-col w-full gap-0.5">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{country}</span>
              <span className="text-xs font-semibold">{percentage}%</span>
            </div>
            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-700 rounded-full">
              <div
                className="h-2 rounded-full"
                style={{ width: `${percentage}%`, backgroundColor: color }}
              ></div>
            </div>
          </div>
        </div>
      ))}
      <div className="border-1 border-divider-100" />
      <div className="mt-3 flex justify-end items-center gap-3">
        <span className="text-[10px]">View all countries</span>
        <Icon iconName="right-arrow" size={14} />
      </div>
    </div>
  );
};

export default CountryStats;
