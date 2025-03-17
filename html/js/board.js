const currentUser = { id: 1, name: "나", avatar: "https://via.placeholder.com/40" };
const comments = [];

function addComment() {
    const input = document.getElementById("commentInput");
    const text = input.value.trim();
    if (!text) return;

    const newComment = {
        id: Date.now(),
        text,
        user: { ...currentUser }
    };

    comments.push(newComment);
    input.value = "";
    renderComments();
}

function renderComments() {
    const commentList = document.getElementById("commentList");
    commentList.innerHTML = "";

    comments.forEach(comment => {
        const isMine = comment.user.id === currentUser.id;
        commentList.innerHTML += `
            <div class="flex items-start space-x-3 p-2 border rounded">
                <img src="${comment.user.avatar}" class="w-8 h-8 rounded-full" alt="댓글 작성자">
                <div class="w-full">
                    <p class="font-semibold">${comment.user.name}</p>
                    <p>${comment.text}</p>
                </div>
                <div>
                    ${isMine ? `<button onclick="editComment(${comment.id})" class="text-blue-500">수정</button>
                                <button onclick="deleteComment(${comment.id})" class="text-red-500">삭제</button>` 
                                : `<button onclick="reportComment(${comment.id})" class="text-gray-500">신고</button>`}
                </div>
            </div>
        `;
    });
}

function editComment(commentId) {
    const comment = comments.find(c => c.id === commentId);
    const newText = prompt("댓글을 수정하세요:", comment.text);
    if (newText) {
        comment.text = newText;
        renderComments();
    }
}

function deleteComment(commentId) {
    const index = comments.findIndex(c => c.id === commentId);
    comments.splice(index, 1);
    renderComments();
}

function reportComment(commentId) {
    alert("신고가 접수되었습니다.");
}