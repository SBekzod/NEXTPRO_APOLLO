import React from 'react';
import Link from 'next/link'

export default function GetStartedPage() {
  return <div>
      <p>TABLE 1</p>
      <p>TABLE 2</p>
      <p>TABLE 3</p>
      <Link href="/table/5">
        <a style={{color: "green"}}>PRESS</a>
      </Link>
  </div>
}