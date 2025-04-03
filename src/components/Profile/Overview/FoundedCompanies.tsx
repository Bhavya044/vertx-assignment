import React from "react";
import Card from "../../UI/Card";
import Label from "../../UI/Label";

interface Company {
  name: string;
  foundedYear?: number;
  category?: string;
  role?: string;
  img?: string;
  bgLabel?: string;
  acquiredBy?: string;
}

interface FoundedCompaniesProps {
  companies: Company[];
  experience: string;
}

const FoundedCompanies: React.FC<FoundedCompaniesProps> = ({
  companies,
  experience,
}) => {
  return (
    <Card title="Founded Companies" className="min-h-[348px]">
      <div className="flex flex-col gap-6 -mt-2">
        <span className="text-[64px] font-bold">{experience}</span>
        <div className="flex flex-col gap-6">
          {companies.map((company, index) => (
            <div className="flex items-center gap-2.5" key={index}>
              <div className="bg-white h-7.5 w-9 rounded-xs flex items-center justify-center">
                <img src={company.img} className="h-[19px] w-[19px] " />
              </div>
              <div className="flex flex-col items-start w-full">
                <div className="text-sm font-bold justify-between w-full  flex items-center">
                  <div className="flex items-center gap-4">
                    {company.name}{" "}
                    {company?.role ? (
                      <Label
                        text={company.role}
                        bgColor={company.bgLabel ?? "white"}
                        className="px-2 py-0.5"
                      />
                    ) : null}
                  </div>
                  <div className="text-[8px] font-[500]">View Profile</div>
                </div>
                {company?.foundedYear ||
                company.acquiredBy ||
                company?.category ? (
                  <div className="text-[10px] font-[400] max-w-[184px]">
                    {company?.foundedYear
                      ? ` Founded in ${company.foundedYear}.`
                      : ""}
                    {company.acquiredBy
                      ? `Acquired by ${company.acquiredBy}.`
                      : null}
                    &nbsp;
                    {company?.category ? (
                      <>
                        in &nbsp;
                        <span className="font-medium">
                          {company.category}
                        </span>.{" "}
                      </>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default FoundedCompanies;
