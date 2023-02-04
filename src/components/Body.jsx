const Body = (props ) => {
    return (
        <div className="body">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="body__title">Choice Theme</h1>
                        <p className="body__text">Choice Theme is a free Bootstrap 4 theme created by Blue Brothers Designs. It is a one page theme that will help you beautifully showcase your new business or project!</p>
                        <p className="body__text">This theme features stock photos by <a href="https://unsplash.com/">Unsplash</a>, along with a custom Google Maps skin courtesy of <a href="https://snazzymaps.com/">Snazzy Maps</a>.</p>
                        <p className="body__text">Click the buttons below to learn more!</p>
                        <div className="body__buttons">
                            <a href="#" className="btn btn--primary">Learn More</a>
                            <a href="#" className="btn btn--secondary">Download Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;