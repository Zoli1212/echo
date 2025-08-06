import { useQuery} from 'convex/react'
import {api} from '@workspace/backend/_generated/api'

export default function Page() {

  const users = useQuery(api.users.getMany)
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="max-w-sm w-full max-auto">
      {JSON.stringify(users, null, 2)}

      </div>
     
    </div>
  )
}
