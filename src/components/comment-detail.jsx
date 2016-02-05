var React = require('react');
var Reflux = require('reflux');

module.exports = React.createClass({

    render: function(){
        return <div className="subcomment">
            {this.renderComment()}
        </div>
    },

    renderComment(){

        return this.props.comm.slice(0,4).map(function(aComment){
        //    console.log(aComment);
         return <div key={aComment.id}>
                <ul className="list-group">

                  <li className="list-group-item list-group-item-success">Comment: {aComment.comment}
                    <span className="badge">{aComment.ups} </span>
                    </li>
                  <li className="list-group-item list-group-item-danger">Platform: {aComment.platform}</li>
                </ul>
            </div>
        });

    }


});


