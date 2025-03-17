document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll(".tab");
  const rows = document.querySelectorAll("#boardList tr");
  const sortOption = document.getElementById("sortOption");

  // 탭 클릭 이벤트 (카테고리 필터링)
  tabs.forEach(tab => {
      tab.addEventListener("click", function() {
          tabs.forEach(t => t.classList.remove("active"));
          this.classList.add("active");

          const selectedCategory = this.getAttribute("data-category");

          rows.forEach(row => {
              if (selectedCategory === "all" || row.getAttribute("data-category") === selectedCategory) {
                  row.style.display = "table-row";
              } else {
                  row.style.display = "none";
              }
          });
      });
  });

  // 정렬 기능
  sortOption.addEventListener("change", function() {
      const criteria = this.value;
      const boardList = document.getElementById("boardList");
      let sortedRows = Array.from(rows);

      sortedRows.sort((a, b) => {
          let aValue, bValue;

          if (criteria === "latest") {
              aValue = new Date(a.getAttribute("data-date"));
              bValue = new Date(b.getAttribute("data-date"));
          } else if (criteria === "views") {
              aValue = parseInt(a.getAttribute("data-views"));
              bValue = parseInt(b.getAttribute("data-views"));
          } else if (criteria === "recommend") {
              aValue = parseInt(a.getAttribute("data-recommend"));
              bValue = parseInt(b.getAttribute("data-recommend"));
          }

          return bValue - aValue; // 내림차순 정렬
      });

      boardList.innerHTML = "";
      sortedRows.forEach(row => boardList.appendChild(row));
  });
});