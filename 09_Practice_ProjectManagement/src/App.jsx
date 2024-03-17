import SideBar from "./components/sideBar";

function App() {
    return (
        <main className="h-screen">
            <SideBar></SideBar>
            <div
                className="p-7 text-2x1 font-semibold flex-1 h-screen">
                <h1>
                    Hello World</h1>
            </div>
        </main>
    );
}

export default App;
