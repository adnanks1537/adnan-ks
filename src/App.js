import React, { useState } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Tools from './components/Tools';
import ProgrammingLanguages from './components/ProgrammingLanguages';
import Contact from './components/Contact';
import Loader from './components/Loader';

function App() {
    const [loading, setLoading] = useState(true);

    const handleComplete = () => {
        setLoading(false);
    };

    return (
        <>
            {loading ? (
                <Loader onComplete={handleComplete} />
            ) : (
                <div className="App">
                    <Header />
                    <Summary />
                    <ProgrammingLanguages /> {/* New section added here */}
                    <Experience />
                    <Education />
                    <Skills />
                    <Certifications />
                    <Achievements />
                    <Tools />
                    <Contact />
                </div>
            )}
        </>
    );
}

export default App;
