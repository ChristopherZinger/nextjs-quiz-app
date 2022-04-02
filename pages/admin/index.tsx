import Link from 'next/link'

const Admin = () => {
  return (
    <div>
      <h1>Admin</h1>
      <Link href="/admin/add-question">add question</Link>
    </div>
  )
}

export default Admin