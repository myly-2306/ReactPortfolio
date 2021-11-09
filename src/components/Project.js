import React from 'react';
import { ProjectCard } from './ProjectCard';
import fitnesstracker from '../images/fitnesstracker.png';
import passwordgenerator from '../images/passwordgenerator.png';
import weighttracker from '../images/weighttracker.png';
import weatherdashboard from '../images/weatherdashboard.png';
import workplanner from '../images/workplanner.png';
import timedquiz from '../images/timedquiz.png';


export const Project = () => {
    const Data = [
        {
            projectName: "Fitness Tracker",
            projectImg: fitnesstracker,
            desc: "Donec vehicula suscipit diam, eu euismod mauris blandit vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque eget erat tincidunt, egestas nisi ac, fringilla risus. Praesent sagittis felis consequat diam ultricies venenatis. Curabitur tristique neque sem, sed vulputate turpis eleifend condimentum",
            id: "1",
            deployedlink: "https://my-tracker35.herokuapp.com/",
            github: "https://github.com/Proton-8/WeightTracker",
        },
        {
            projectName: "Password Generator",
            projectImg: passwordgenerator,
            desc: "Donec vehicula suscipit diam, eu euismod mauris blandit vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque eget erat tincidunt, egestas nisi ac, fringilla risus. Praesent sagittis felis consequat diam ultricies venenatis. Curabitur tristique neque sem, sed vulputate turpis eleifend condimentum",
            id: "2",
            deployedlink: "https://myly-2306.github.io/password-generator/",
            github: "https://github.com/myly-2306/password-generator",
        },
        {
            projectName: "Weight Tracker",
            projectImg: weighttracker,
            desc: "Donec vehicula suscipit diam, eu euismod mauris blandit vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque eget erat tincidunt, egestas nisi ac, fringilla risus. Praesent sagittis felis consequat diam ultricies venenatis. Curabitur tristique neque sem, sed vulputate turpis eleifend condimentum",
            id: "3",
            deployedlink: "https://my-tracker35.herokuapp.com/",
            github: "https://github.com/Proton-8/WeightTracker",
        },
        {
            projectName: "Weather Dashboard",
            projectImg: weatherdashboard,
            desc: "Donec vehicula suscipit diam, eu euismod mauris blandit vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque eget erat tincidunt, egestas nisi ac, fringilla risus. Praesent sagittis felis consequat diam ultricies venenatis. Curabitur tristique neque sem, sed vulputate turpis eleifend condimentum",
            id: "4",
            deployedlink: "https://my-tracker35.herokuapp.com/",
            github: "https://github.com/Proton-8/WeightTracker",
        },
        {
            projectName: "Work Planner",
            projectImg: workplanner,
            desc: "Donec vehicula suscipit diam, eu euismod mauris blandit vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque eget erat tincidunt, egestas nisi ac, fringilla risus. Praesent sagittis felis consequat diam ultricies venenatis. Curabitur tristique neque sem, sed vulputate turpis eleifend condimentum",
            id: "5",
            deployedlink: "https://myly-2306.github.io/Work-day-scheduler/",
            github: "https://github.com/myly-2306/Work-day-scheduler",
        },
        {
            projectName: "Timed Quiz",
            projectImg: timedquiz,
            desc: "Donec vehicula suscipit diam, eu euismod mauris blandit vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque eget erat tincidunt, egestas nisi ac, fringilla risus. Praesent sagittis felis consequat diam ultricies venenatis. Curabitur tristique neque sem, sed vulputate turpis eleifend condimentum",
            id: "6",
            deployedlink: "https://myly-2306.github.io/Timed-Quiz/index2",
            github: "https://github.com/myly-2306/Timed-Quiz",
        },
    ]

    return (
        <section>
            <div>
                    <div>
                        <h1 className="text-large bg-dark rounded">Upcoming Shows</h1>
                    </div>
                <div className="shows">
                    {Data.map((app) => (
                        <ProjectCard 
                        project={app.projectName}
                        projectImg={app.projectImg}
                        desc={app.desc}
                        key={app.id}
                        deployedLink={app.deployedlink}
                        github={app.github}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
