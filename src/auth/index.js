import { Cookies } from 'quasar'

// 로그인 토큰으로 쿠키에 로그인 정보를 등록
function sessionLogin(payload, token) {
  var expire = new Date()
  expire.setHours(expire.getHours() + 24)
  Cookies.set('login_user', payload)
  Cookies.set('token', token, { expires: expire })
}

// 로그아웃을 요청하고 쿠키에서 삭제한다.
function sessionLogout() {
  return new Promise(() => {
    const user = Cookies.get('login_user')
    console.log('SessionLogout-', user)

    Cookies.remove('login_user')
    Cookies.remove('token')
  })
}

function isLogined() {
  // 둘다 있는경우에만 로그인 성공이다.
  var isLogined = Cookies.has('login_user') && Cookies.has('token')

  // 로그인 상태가 아닌데 쿠키에 정보가 있다면 지워버린다.
  if (!isLogined && (Cookies.has('login_user') || Cookies.has('token'))) {
    Cookies.remove('login_user')
    Cookies.remove('token')
  }

  return isLogined
}

export { sessionLogin, sessionLogout, isLogined }
