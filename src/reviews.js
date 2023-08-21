import React from "react";
import "./reviews.css";
import Harry from "./img/harry.jpg";
import Hermione from "./img/hermione.jpg";

function Reviews() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-8 course-details-content">
          <div class="course-details-card mt--40">
            <div class="course-content">
              <h5 class="mb--20 h5R text-heading">RATING</h5>
              <div class="row row--30">
                <div class="col-lg-4">
                  <div class="rating-box">
                    <div class="rating-number">5.0</div>
                    <div class="rating">
                      {" "}
                      <i class="fa fa-star" aria-hidden="true"></i>{" "}
                      <i class="fa fa-star" aria-hidden="true"></i>{" "}
                      <i class="fa fa-star" aria-hidden="true"></i>{" "}
                      <i class="fa fa-star" aria-hidden="true"></i>{" "}
                      <i class="fa fa-star" aria-hidden="true"></i>{" "}
                    </div>
                    <span>(25 Review)</span>{" "}
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="review-wrapper">
                    <div class="single-progress-bar">
                      <div class="rating-text  text-white">
                        {" "}
                        5 <i class="fa fa-star" aria-hidden="true"></i>{" "}
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span class="rating-value text-white">23</span>{" "}
                    </div>
                    <div class="single-progress-bar">
                      <div class="rating-text text-white">
                        {" "}
                        4 <i class="fa fa-star" aria-hidden="true"></i>{" "}
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span class="rating-value text-white">3</span>{" "}
                    </div>
                    <div class="single-progress-bar">
                      <div class="rating-text text-white">
                        {" "}
                        3 <i class="fa fa-star" aria-hidden="true"></i>{" "}
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span class="rating-value text-white">2</span>{" "}
                    </div>
                    <div class="single-progress-bar">
                      <div class="rating-text text-white">
                        {" "}
                        2 <i class="fa fa-star" aria-hidden="true"></i>{" "}
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "40%" }}
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span class="rating-value text-white">3</span>{" "}
                    </div>
                    <div class="single-progress-bar">
                      <div class="rating-text text-white">
                        {" "}
                        1 <i class="fa fa-star" aria-hidden="true"></i>{" "}
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "20%" }}
                          aria-valuenow="0"
                          aria-valuemin="80"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span class="rating-value text-white">2</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div class="comment-wrapper pt--40">
                <div class="section-title">
                  <h5 class="mb--25 h5R  text-white">REVIEWS</h5>
                </div>
                <div class="edu-comment">
                  <div class="thumbnail">
                    {" "}
                    <img src={Harry} alt="Comment Images" />{" "}
                  </div>
                  <div class="comment-content">
                    <div class="comment-top">
                      <h6 class="title text-white">Harry Potter </h6>
                      <div class="rating">
                        {" "}
                        <i class="fa fa-star" aria-hidden="true"></i>{" "}
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>{" "}
                      </div>
                    </div>
                    <span class="subtitle">“ Outstanding Hotel Design ”</span>
                    <p className="pR  text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div class="edu-comment">
                  <div class="thumbnail">
                    {" "}
                    <img src={Hermione} alt="Comment Images" />{" "}
                  </div>
                  <div class="comment-content">
                    <div class="comment-top">
                      <h6 class="title text-white">Hermione Granger</h6>
                      <div class="rating">
                        {" "}
                        <i class="fa fa-star" aria-hidden="true"></i>{" "}
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>{" "}
                      </div>
                    </div>
                    <span class="subtitle">“ Nice Website Design ”</span>
                    <p className="pR  text-white">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
