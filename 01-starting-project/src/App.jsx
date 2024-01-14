import { useState } from 'React';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
    const [selectedTopic, setSelectedTopic] = useState('Please click a button');

    //const ButtonNames = ['components', 'jsx', 'props', 'state'];
    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }

    console.log('App Component rendering...');

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
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
                        <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                        <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
                    </menu>
                </section>
            </main>
            {selectedTopic}
        </div>
    );
}

export default App;
