import CommentCard from "./CommentCard";

const PostCommentList = ({ comments }) => {
  console.log(comments);
  return (
    <div className="space-y-4 divide-y divide-lighterDark pl-2 lg:pl-3">
      {!!comments &&
        comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
    </div>
  );
};

export default PostCommentList;
