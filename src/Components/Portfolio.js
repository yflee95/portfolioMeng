import React, { Component } from "react";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      life:[],
    };
    //this.handleShowDialog = this.handleShowDialog.bind(this);
  }
  handleShowDialog = () => {
    this.setState({ isOpen: true });
    console.log("cliked");
  };

  render() {
    const {life} = this.state;
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title}>
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
                {/* <div className="link-icon">
                  <i className="fa fa-link"></i>
                </div> */}
              </a>
            </div>
          </div>
        );
      });
      var lifeStyle = this.props.data.lifeStyle.map(function (lifeStyle) {
        var lifeImage = "images/portfolio/" + lifeStyle.image;
        
        return (
          <div key={lifeStyle.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={lifeStyle.url} title={lifeStyle.title}>
                <img alt={lifeStyle.title} src={lifeImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{lifeStyle.title}</h5>
                    <p>{lifeStyle.category}</p>
                  </div>
                </div>
                {/* <div className="link-icon">
                  <i className="fa fa-link"></i>
                </div> */}
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <h4>Fashion</h4>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
            <h4 style={{ textAlign: "right" }}>Life Style</h4>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
              onClick={this.handleShowDialog}
            >
              {lifeStyle}

            
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
