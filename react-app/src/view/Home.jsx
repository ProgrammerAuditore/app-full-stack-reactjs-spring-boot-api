import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <>
            <div className="mt-4">
                <div class="h-100 p-5 text-white bg-dark rounded-3">
                    <div class="container">
                        <h1 class="display-4">Jumbo heading</h1>
                        <p class="lead">Jumbo helper text</p>
                        <hr class="my-4"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum corporis minima laudantium, maxime temporibus sint. Explicabo harum officia libero dolorum! Cum commodi fugit eveniet delectus explicabo tempore illo laudantium et?</p>
                        <a href="https://github.com/ProgrammerAuditore" target="_blank"  rel="noreferrer" class="btn btn-primary btn-lg" >ProgrammerAuditore</a>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Home;