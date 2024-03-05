import { Cookies } from 'quasar'

// 로그인 토큰으로 쿠키에 로그인 정보를 등록
function sessionLogin(payload, refresh_token, access_token) {
  var expire1 = new Date()
  var expire2 = new Date()
  expire1.setHours(expire1.getHours() + 6)
  expire2.setHours(expire2.getHours() + 24)

  Cookies.set('login_user', payload)
  Cookies.set('access_token', access_token, { expires: expire1 })
  Cookies.set('refresh_token', refresh_token, { expires: expire2 })
}

// 로그아웃을 요청하고 쿠키에서 삭제한다.
function sessionLogout() {
  return new Promise(() => {
    const user = Cookies.get('login_user')
    console.log('SessionLogout-', user)

    Cookies.remove('login_user')
    Cookies.remove('access_token')
    Cookies.remove('refresh_token')
  })
}

function isLogined() {
  // 둘다 있는경우에만 로그인 성공이다.
  var isLogined = Cookies.has('login_user') && Cookies.has('access_token')

  // 로그인 상태가 아닌데 쿠키에 정보가 있다면 지워버린다.
  if (!isLogined && (Cookies.has('login_user') || Cookies.has('access_token'))) {
    Cookies.remove('login_user')
    Cookies.remove('access_token')
    Cookies.remove('refresh_token')
  }

  return isLogined
}

export { sessionLogin, sessionLogout, isLogined }
