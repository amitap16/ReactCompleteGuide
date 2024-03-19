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
        (projectsState.selectedProjectId === undefined ? <NoProjectSelected onAddProject={handleAddProject} /> :
            projectsState.selectedProjectId === null ? <NewProject handleCancel={handleCancelProject} /> : <></>);

    function handleAddProject() {
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

    return (
        <main className="h-screen my-8 flex gap-8">
            <SideBar onAddProject={handleAddProject} />
            {content}
        </main>
    );
}

export default App;
