import ProfileCard from "../../components/Profile/Overview/ProfileCard";
import FoundedCompanies from "../../components/Profile/Overview/FoundedCompanies";
import { companies, experiences } from "../../utils/helper.config";

const ProfileOverview = () => {
  return (
    <section>
      <div className="text-[20px] font-extrabold mb-7 -mt-3">Overview</div>
      <div className="grid grid-cols-2 gap-3.5">
        <div className="col-span-2">
          <ProfileCard name="Mr. ABC" role="Co-Founder & CEO at Vertx" />
        </div>
        <div className="md:col-span-1 col-span-2">
          <FoundedCompanies companies={companies} experience="02" />
        </div>
        <div className="md:col-span-1 col-span-2">
          <FoundedCompanies experience="03" companies={experiences} />
        </div>
      </div>
    </section>
  );
};

export default ProfileOverview;
