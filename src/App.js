import React from 'react';
import './App.css';

import works from './works';
import Header from './components/Header/Header';
import About from './components/About/About';
import PortfolioItem from './components/PortfolioItem/PortfolioItem';
import ContactForm from './components/ContactForm/ContactForm';

class App extends React.Component {
    state = {
        closed: true
    };

    openForm() {
        this.setState({
            closed: false
        });
    }

    closeForm() {
        this.setState({
            closed: true
        });
    }

    render() {
        return (
            <div className='app'>
                <Header brand='Sample React SPA'></Header>

                <main className='main'>
                    <About title='This is sample react SPA with cats portfolio'>
                    </About>

                    <div className='portfolio'>
                        <div className='container'>
                            {works.map(work => (
                                <PortfolioItem key={work.id} work={work} />
                            ))}
                        </div>
                    </div>

                    <div className='contacts'>
                        <div className='container'>
                            {this.state.closed ? (
                                <button
                                    className='button'
                                    onClick={() => this.openForm()}
                                >
                                    Напишите мне
                                </button>
                            ) : (
                                <div>
                                    <hr />
                                    <ContactForm
                                        onSubmit={() => this.closeForm()}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
