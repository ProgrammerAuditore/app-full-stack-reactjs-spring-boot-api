import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <>
            <div className="mt-4">
                <div className="h-100 p-5 text-white bg-dark rounded-3">
                    <div className="container">
                        <h1 className="display-4">Jumbo heading</h1>
                        <p className="lead">Jumbo helper text</p>
                        <hr className="my-4"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum corporis minima laudantium, maxime temporibus sint. Explicabo harum officia libero dolorum! Cum commodi fugit eveniet delectus explicabo tempore illo laudantium et?</p>
                        <a href="https://github.com/ProgrammerAuditore" target="_blank"  rel="noreferrer" className="btn btn-primary btn-lg" >ProgrammerAuditore</a>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Home;