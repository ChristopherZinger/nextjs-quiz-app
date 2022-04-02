import Link from 'next/link'

const AddQuestion = () => {
  return (
    <div>
      <h1>Add Question</h1>
      <Link href={'/'}>home</Link>
      <Link href={'/admin'}>admin</Link>
    </div>
  )
}

export default AddQuestion