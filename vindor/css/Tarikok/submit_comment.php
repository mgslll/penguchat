<?php
// الاتصال بقاعدة البيانات
$conn = new mysqli("localhost", "root", "", "nbras2025");

// تحقق من الاتصال
if ($conn->connect_error) {
    die("فشل الاتصال بقاعدة البيانات: " . $conn->connect_error);
}

// جلب البيانات من النموذج
$full_name = $_POST['full_name'];
$comment = $_POST['comment'];
$rating = $_POST['rating'];

// إدخال البيانات في جدول comments
$sql = "INSERT INTO comments (full_name, comment, rating) VALUES ('$full_name', '$comment', '$rating')";

if ($conn->query($sql) === TRUE) {
    echo "تم إرسال تعليقك بنجاح!";
} else {
    echo "خطأ: " . $sql . "<br>" . $conn->error;
}

// إغلاق الاتصال
$conn->close();
?>
