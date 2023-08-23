import Link from "next/link";


export default function CourseNav() {
  return (
    <aside>

        <ul>
            <Link href='/course/frontend'>
            <li>Frontend </li>
            </Link>
      
            <Link href='/course/backend'>
            <li>backend </li>
            </Link>

            <Link href='/course/product'>
            <li>product </li>
            </Link>

            
        </ul>
    </aside>
  )
}
