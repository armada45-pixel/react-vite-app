export function Home(prop) {
  const children = prop.children
  const { userName, userLast } = prop

  return (
    <div id="Home_Page">
      <p>
        {userName} {userLast}
      </p>
      {children}
    </div>
  )
}
