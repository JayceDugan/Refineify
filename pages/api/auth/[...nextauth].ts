import NextAuth from "next-auth"
import AtlassianProvider from "next-auth/providers/atlassian";

const clientId = 'KKm6ndi7Eop6X7ND47r1l2upA7K3TcJ0'
const clientSecret = 'ATOAIBoRnsgSyMgBr8x6DxDBlebRd_Un5WgGICxsGNSO_F2wRIfHVA9v0oENZPEXahFy8122A006'

export const authOptions = {
  providers: [
    AtlassianProvider({
      // clientId: process.env.ATLASSIAN_CLIENT_ID,
      // clientSecret: process.env.ATLASSIAN_CLIENT_SECRET,
      clientId,
      clientSecret,
      authorization: {
        params: {
          scope: "write:jira-work read:jira-work read:jira-user offline_access read:me"
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      return session
    }
  },
  pages: {
    signIn: '/auth/signin',
  }
}

export default NextAuth(authOptions)
