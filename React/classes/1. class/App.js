    // create an h1 tag
    const heading = React.createElement(
        "h1", 
        { 
            id: "title",
        }, 
        "Heading 1");
        const heading2 = React.createElement(
        "h2", 
        { 
            id: "title",
        }, 
        "Heading 2");

    const container = React.createElement(
        "div",
        {
        id:"container",
    },
    [heading, heading2]
    );

    console.log(heading);
    //  put h1 tag inside root, we need to tell which is the root element, root ele is inside the div tag
    const root = ReactDOM.createRoot(document.getElementById("root"));
    // passing the React element inside the root
    root.render(container);
