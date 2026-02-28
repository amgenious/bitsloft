import {useState} from 'react'
import { projects } from '../assets/products';
import { ProjectCard } from './projectcard';

const ClientsProductsPage = () => {
    const [isWeb, setIsWeb] = useState(true);
    
    // const changeApp = () => {
    //     setIsWeb(false);
    // }

    const changeWeb = () => {
        setIsWeb(true);
    }
  return (
    <div>
        <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Projects
        </h2>
        </div>
         <div className='flex justify-center items-center gap-2'>
                <div
                    className={`p-3 rounded-lg cursor-pointer ${isWeb ? 'bg-blue-400 hover:bg-blue-300' : 'bg-blue-950'}`}
                    onClick={changeWeb}
                >
                Web Apps
                </div>
                {/* <div
                    className={`p-3 rounded-lg cursor-pointer ${!isWeb ? 'bg-blue-400 hover:bg-blue-300' : 'bg-blue-950'}`}
                    onClick={changeApp}
                >
                    Mobile Apps
                </div> */}
            </div>

            <div className='mt-20 flex flex-wrap gap-7 justify-center items-center'>
                {isWeb
                    ? projects
                        .filter((project) => project.category === "web")
                        .sort((a, b) => b.id - a.id)
                        .map((project, index) => (
                            <ProjectCard index={index} key={project.name} {...project} />
                        ))
                    : projects
                        .filter((project) => project.category === "app")
                        .map((project, index) => (
                            <ProjectCard index={index} key={project.name} {...project} />
                        ))
                }
            </div>
    </div>
  )
}

export default ClientsProductsPage