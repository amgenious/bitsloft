import { ikolilu, smartwatt, xypress } from "../assets";


const companies = [
  { name: 'SmartWatt Company Limited', logo: smartwatt,website:"https://smartwattcompanylimited.com" },
  { name: 'ikolilu', logo: ikolilu, website:"https://ikolilu.com" },
  { name: 'Xypress', logo: xypress, wesite:"#" },
];

const CompanieslogoComponent = () => {
  return (
    <section className="w-full bg-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Featured Clients
        </h2>
        <div className="relative overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex gap-4 sm:gap-8 lg:gap-12">
            {companies.concat(companies).map((company, index) => (
              <a href={company.website} className="cursor-pointer" target="_blank" key={index}>
              <img
                key={index}
                src={company.logo}
                alt={company.name}
                className="h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanieslogoComponent