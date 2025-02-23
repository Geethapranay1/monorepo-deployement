import { client } from "@repo/db/client";

export default async function Home() {
  const users = await client.user.findMany();
  return (
    <div>
      {JSON.stringify(users)}
    </div>
  )
}

//Change from static to dynamic
// export const revalidate = 60;
// or
// export const dynamic = 'force-dynamic'

export const dynamic = 'force-dynamic'