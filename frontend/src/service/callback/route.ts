import { host } from "../API"

export async function GET(request: any) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  const redirectTo = request.cookies.get('redirectTo')?.value

  console.log(searchParams)

  const redirectURL = redirectTo ?? new URL('/', request.url)

  const cookieExpiresInSeconds = 60 * 60 * 24 * 30 // 1 month

//   return NextResponse.redirect(redirectURL, {
//     headers: {
//       'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSeconds};`,
//     },
//   })
}