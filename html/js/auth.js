document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signup-form").addEventListener("submit", function (event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        
        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        
        // 간단한 로컬 저장소 저장 (실제 서비스에서는 백엔드 서버와 연동 필요)
        localStorage.setItem("user", JSON.stringify({ username, email, password }));
        alert("회원가입이 완료되었습니다!");
        window.location.href = "../index.html";
    });
});