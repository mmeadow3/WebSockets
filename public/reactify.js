socket.on("connection", function (data){
  // console.log(data);

/////////////style variables ///////////////////////
  var divStyle = {
    color: 'red',
    background: "lightblue",
    border: "1px solid black",
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };

  var pStyle = {
    color: "green"
  }
 /////////////////////// /////////////////////// /////////////////////// ///////////////////////

  var HelloWorld = React.createClass({
          render: function() {
          return <div style={divStyle}>
              <h1>Hello World from React</h1>
              <h1>this should equal "world" from the socket: {data}</h1>
              <p style={pStyle}>Text from REACT</p>
          </div>

      }
  });
  var example = document.getElementById("example")
  React.render(<HelloWorld />, example);
})
