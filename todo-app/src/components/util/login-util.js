//로그인 유저의 토큰을 반환하는 함수
export const getToken = () =>{
    return localStorage.getItem('ACCESS_TOKEN')
}
//로그인 유저의 이름을 반환하는 함수

export const getUserName = () => localStorage.getItem('LOGIN_USERNAME')

//로그인 상태인지 검증해주는 함수

export const isLogin = () =>{
    return !!getUserName();
    //유저이름 가져왔을때 null 이면 false 
    // !null 는 true로 형변환
    // !!null은 true > false 원래대로 가는것 
}