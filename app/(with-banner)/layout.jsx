
const PostsLayout = ({ children }) => {
  return (
    <div>
      <marquee style={{ background: 'white', color: 'purple', marginTop: '5px' }}>este es un layout general</marquee>
      {children}
    </div>
  )
}

export default PostsLayout
