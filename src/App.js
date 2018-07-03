import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import { Link, Route } from 'react-router-dom';

import { Container } from 'semantic-ui-react';

import MoviesPage from './components/pages/MoviesPage';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {

    render() {
        return (
            <div className="App">

                <Header />
                <Container text>
                    <Route path='/movies' component={ MoviesPage }></Route>

                    <h1>Movie App</h1>

                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem doloremque, enim
                        praesentium quia sequi tenetur voluptas. Cupiditate deleniti dolorum illo, maiores nemo,
                        nesciunt obcaecati, porro provident quae quia tempora?
                    </div>
                    <div>Atque debitis distinctio id maiores ratione repudiandae similique? Accusantium consequatur
                        deserunt distinctio ducimus ea eius expedita, incidunt labore nihil nulla obcaecati qui
                        reiciendis saepe sed, tempora ullam ut velit voluptate!
                    </div>
                    <div>Consectetur dicta eveniet illum ipsam ipsum iste iure minima modi natus unde. Asperiores dicta
                        eveniet fugit labore minus molestiae, quas suscipit tenetur voluptatem voluptatum! Cupiditate
                        eveniet excepturi nobis quo ratione?
                    </div>
                    <div>Alias at dicta, distinctio dolor id libero nemo nesciunt quia saepe veniam veritatis
                        voluptatum. Aut beatae debitis harum illo quae. Dolores pariatur perspiciatis possimus sit
                        temporibus, voluptatum. Architecto, asperiores, iure.
                    </div>
                    <div>Adipisci atque aut consectetur cumque deleniti ducimus eveniet, excepturi expedita fugit maxime
                        provident quos repellat, repellendus sequi soluta veritatis voluptate! Aspernatur deleniti
                        dolore earum enim id impedit, labore porro recusandae.
                    </div>

                </Container>
                <Footer/>

            </div>
        );
    }
}

export default App;