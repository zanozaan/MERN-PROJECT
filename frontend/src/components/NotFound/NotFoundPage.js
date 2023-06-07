import React from 'react';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div class="container notfound">
    <div class="row">
        <div class="col-md-12">
            <div class="error-template">
                <h1>
                    Oops!</h1>
                <h2>
                    404 Not Found</h2>
                <div class="error-details">
                  Sorry, page not found, try to return to the HOME page.
                </div>
                <div class="error-actions">
                    <a href="/home" 
                      class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span>
                        Take Me Home </a>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default NotFoundPage;
