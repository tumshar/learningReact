/** 
* <div id="parent">
       <div id="child">
       <h1>i m a h1 tag</h1>
*
*</div>
</div>
*
*
*
*
**/

const parent = React.createElement("div",{id:"parent"}, React.createElement("div",{id:"child"},React.createElement("h1",{},"i m a h1 tag")));






console.log(parent);


    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);