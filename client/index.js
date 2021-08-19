$('#comment-submit').on('click', () => {
  const inputText = $('#comment-input').val();
  addCommentToDB(inputText);
});

const appendComment = (commentData) => {
  $('#comment-container').append(`<p class="comment">Comment: ${commentData}</p>`);
};

const addCommentToDB = (commentData) => {
  fetch('api/comments', {
    method: 'POST',
    body: JSON.stringify({ comment: commentData }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(response => response.json())
  .then(parsedResponse => {
    appendComment(parsedResponse.comment);
    $('#comment-input').val('');
  })
  .catch(err => {
    console.error('Error submitting comment to DB:', err);
  });
};

const getCommentsFromDB = (comments) => {
  fetch('api/comments', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(parsedResponse => {
    parsedResponse.forEach((comment) => {
      appendComment(comment.comment);
    });
  })
  .catch(err => {
    console.error('Error getting comments from DB:', err);
  });
};

getCommentsFromDB();