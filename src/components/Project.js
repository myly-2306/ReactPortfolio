import React from 'react';
import { ProjectCard } from './ProjectCard';
import fitnesstracker from '../images/fitnesstracker.png';
import passwordgenerator from '../images/passwordgenerator.png';
import weighttracker from '../images/weighttracker.png';
import weatherdashboard from '../images/weatherdashboard.png';
import workplanner from '../images/workplanner.png';
import timedquiz from '../images/timedquiz.png';
import travelplanner from '../images/travelplanner.png';
import notetaker from '../images/notetaker.png';


export const Project = () => {
    const Data = [
        {
            projectName: "Fitness Tracker",
            projectImg: fitnesstracker,
            desc: "An application allows you to view, create and track daily workouts. You will also be able to log multiple exercises in a workout on a given day. You should also be able to track name, type, weight, set, reps and duration of exercises. If the exercise is a cardio, you should be able to track your distance traveled.",
            id: "1",
            deployedlink: "https://my-tracker35.herokuapp.com/",
            github: "https://github.com/myly-2306/workout-tracker3",
        },
        {
            projectName: "Password Generator",
            projectImg: passwordgenerator,
            desc: "An application that enables users to generate random passwords based on criteria that they've selected. This app run in browser and will feature dynamically updated HTML and CSS powered by JavaScript code.",
            id: "2",
            deployedlink: "https://myly-2306.github.io/password-generator/",
            github: "https://github.com/myly-2306/password-generator",
        },
        // {
        //     projectName: "Weight Tracker",
        //     projectImg: weighttracker,
        //     desc: "Donec vehicula suscipit diam, eu euismod mauris blandit vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque eget erat tincidunt, egestas nisi ac, fringilla risus. Praesent sagittis felis consequat diam ultricies venenatis. Curabitur tristique neque sem, sed vulputate turpis eleifend condimentum",
        //     id: "3",
        //     deployedlink: "https://my-tracker35.herokuapp.com/",
        //     github: "https://github.com/Proton-8/WeightTracker",
        // },
        {
            projectName: "Note Taker",
            projectImg: notetaker,
            desc: "An application that can be used to write and save notes. This app use an Express.js back end and save and retrieve note data from JSON file.",
            id: "3",
            deployedlink: "https://secure-cliffs-44654.herokuapp.com/",
            github: "https://github.com/myly-2306/NotePad",
        },
        {
            projectName: "Weather Dashboard",
            projectImg: weatherdashboard,
            desc: "An application use OpenWeather One Call API to retrieve weather data for cities. This app uses localStorage to store any persistent data. Users can look up on the search bar and see the weather outlook for multiple cities and weather for the next 5 days.",
            id: "4",
            deployedlink: "https://myly-2306.github.io/Weather-dashboard/display.html",
            github: "https://github.com/myly-2306/Weather-dashboard",
        },
        {
            projectName: "Work Planner",
            projectImg: workplanner,
            desc: "A simple calendar application that allows a user to save events for each hour of the day. This app runs in the browser and feature dynamically HTML, CSS and powered by jQuery. This app also uses Moment.js library to work with date and time.",
            id: "5",
            deployedlink: "https://myly-2306.github.io/Work-day-scheduler/",
            github: "https://github.com/myly-2306/Work-day-scheduler",
        },
        {
            projectName: "Timed Quiz",
            projectImg: timedquiz,
            desc: "An application that mimics a quiz on JavaScript fundamentals. This app is a timed coding quiz with multiple-choice questions.",
            id: "6",
            deployedlink: "https://myly-2306.github.io/Timed-Quiz/index2",
            github: "https://github.com/myly-2306/Timed-Quiz",
        },
        // {
        //     projectName: "Travel-Planner-Lite",
        //     projectImg: travelplanner,
        //     desc: "An application that mimics a quiz on JavaScript fundamentals. This app is a timed coding quiz with multiple-choice questions.",
        //     id: "7",
        //     deployedlink: "https://egraham96.github.io/group-project-1/",
        //     github: "https://github.com/egraham96/Travel-Planner-Lite",
        // },
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
