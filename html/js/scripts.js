function loadBoard() {
    const board = document.getElementById("board-body");
    board.innerHTML = ""; // 기존 데이터 제거
    
    boardData.forEach((post, index) => {
        const row = document.createElement("tr");
        row.setAttribute("onclick", "viewPost(this)");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${post.title}</td>
            <td>${post.author}</td>
            <td>${post.views}</td>
            <td>${post.likes}</td>
        `;
        board.appendChild(row);
    });
}

function viewPost(row) {
    alert(`게시글 보기: ${row.cells[1].innerText}`);
}

document.addEventListener("DOMContentLoaded", loadBoard);