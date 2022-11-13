
const fetchCommentsPost = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  throw new Error('Error al cargar los comentarios')
  // return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
  //   next: {
  //     revalidate: 60
  //   }
  // })
  //   .then(res => res.json())
}
async function Post ({ params }) {
  const { id } = params
  const comments = await fetchCommentsPost(id)
  return (
    <ul style={{ fontSize: '10px', backgroundColor: '#444', padding: '1px 20px' }}>
      {comments.map(comment => (
        <li key={comment.id}>
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  )
}

export default Post
