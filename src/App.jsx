import React from 'react';
import Formulario from './components/Formulario';
import Titulo from './components/Titulo';

const App = () => {
    return (
        <div className="container-fluid">
            <Titulo/>
            <Formulario/>
        </div>
    );
};

export default App;