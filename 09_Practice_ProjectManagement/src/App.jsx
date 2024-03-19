import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: []
    });

    const content =
        (projectsState.selectedProjectId === null
            ? <NewProject handleCancel={handleCancelProject} handleAddProject={handleAddProject} /> :
            projectsState.selectedProjectId === undefined
                ? <NoProjectSelected onStartProject={startAddProject} />
                : <></>);

    console.log(projectsState);

    function startAddProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null
            }
        });
    }

    function handleCancelProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined
            }
        });
    }

    function handleAddProject(data) {
        const newProject = {
            ...data,
            id: Math.random()
        };

        setProjectsState(prevState => {
            return {
                ...prevState,
                projects: [...prevState.projects, newProject]
            }
        });
    }

    return (
        <main className="h-screen my-8 flex gap-8">
            <SideBar onStartProject={startAddProject} />
            {content}
        </main>
    );
}

export default App;
