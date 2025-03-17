class MyAsidemenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <aside class="sidebar">
                <div class="user-box">
                    <p>로그인 후 이용하세요.</p>
                    <div class="login_way">
                        <button class="btn btn_login way_kakao" onclick="alert('로그인 기능은 아직 구현되지 않았습니다.')">
                            <span class="icon kakao"></span>카카오로 로그인
                        </button>
                        <button class="btn btn_login way_google" onclick="alert('로그인 기능은 아직 구현되지 않았습니다.')">
                            <span class="icon google"></span>구글로 로그인
                        </button>
                    </div>
                    <div class="user_form">
                        <button class="btn btn_signup" onclick="location.href='pages/signup.html'">회원가입</button>
                        <button class="btn btn_findUser" onclick="location.href='pages/signup.html'">ID/PW 찾기</button>
                    </div>
                </div>

                <div class="tree_mn_wrap">
                    <div class="mn_inner">
                        <div class="mn_title">
                            <p>매니아톡</p>
                        </div>
                        <ul>
                            <li class="mn_tree">공지사항</li>
                            <li class="mn_tree" onclick="location.href='../pages/board.html'">축구/FC온라인</li>
                        </ul>
                    </div>
                </div>
            </aside>
        `;
    }
}
customElements.define('my-asidemenu', MyAsidemenu);
