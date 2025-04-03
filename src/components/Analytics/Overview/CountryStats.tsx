import { countryData } from "../../../utils/helper.config";

const CountryStats = () => {
  return (
    <div className="w-full max-w-md p-6 text-white rounded-lg shadow-lg">
      {countryData.map(({ country, flag, percentage, color }) => (
        <div key={country} className="mb-4 flex items-center gap-3.5">
          <img src={flag} alt={country} className="w-12 h-8 rounded-xs" />
          <div className="flex flex-col w-full ">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">{country}</span>
              <span className="text-[10px] font-medium">{percentage}%</span>
            </div>
            <div className="flex-1 h-2 rounded-full bg-gray-700">
              <div
                className={`h-2 rounded-full`}
                style={{ width: `${percentage}%`, backgroundColor: color }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryStats;
