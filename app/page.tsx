import Image from 'next/image'
import Link from 'next/link'
import AddToCart from './components/AddToCart'
import Button from './components/Button'

export default function Home() {
  return (
    <>
      <main><h1>Hello</h1></main>
      <Link href="/users">Users</Link>
      <AddToCart />
      <Button />
    </>
  )
}
