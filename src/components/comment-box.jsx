var React = require('react');
var Reflux = require('reflux');
var CommentDetail = require('./comment-detail');

module.exports = React.createClass({


    render: function(){
        return <ul className="list-group">
            {this.renderComments()}
        </ul>
    },

    renderComments: function(){

        return this.props.comments.slice(0, 20).map(function (comment){
            return <li className="list-group-item comment-box" key={comment.id}>
                <span className="badge">{comment.ups}</span>
                <h5>{comment.author}</h5>
                {comment.comment}
                <CommentDetail comm={comment.children}> </CommentDetail>

            </li>
        })
    }
});
