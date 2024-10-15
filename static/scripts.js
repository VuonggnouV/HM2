// Hiển thị nút khi người dùng cuộn xuống
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block"; // Hiển thị nút khi lăn quá 300px
    } else {
        backToTopButton.style.display = "none"; // Ẩn nút khi ở trên cùng
    }
}

// Lăn lên đầu trang khi nhấp vào nút
document.getElementById("backToTop").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'}); // Lăn lên đầu trang với hiệu ứng mượt
});
