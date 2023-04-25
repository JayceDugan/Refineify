import { useSession, signIn, signOut } from "next-auth/react"
import React from "react";

export const AccessToken: React.FC = () => {
  const { data } = useSession()

  return (
    <div>
      Access Token: {JSON.stringify(data?.accessToken)}
    </div>
  )
}
