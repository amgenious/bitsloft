export const ProjectCard = ({name, web_link, description, image }:any) => {
    return(
        <div 
        className="bg-blue-600 p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className='relative w-full h-[230px]'>
            <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
            />
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
        </div>
          </div>
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'><a href={web_link} target='_blank'>{name}</a></h3>
            <p className='mt-2 text-white text-[14px]'>{description}</p>
          </div>
        </div>
    )
}