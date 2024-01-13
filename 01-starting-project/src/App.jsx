import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept concept={CORE_CONCEPTS[0]} />
                        <CoreConcept concept={CORE_CONCEPTS[1]} />
                        <CoreConcept concept={CORE_CONCEPTS[2]} />
                        <CoreConcept concept={CORE_CONCEPTS[3]} />
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
